import { Injectable } from '@nestjs/common';
import { AdminLoginService } from './services/admin-login/admin-login.service';
import { BotService } from './services/bot/bot.service';
import { HandleSignupService } from './services/signup/handle-signup.service';

@Injectable()
export class TelegramService {

  constructor(private botService:BotService,private handleSignupService:HandleSignupService,private adminLoginService:AdminLoginService) {
    this.start();
  }
  bot = this.botService.getBotInstance()
  
  handleSignup = (chatId: number, msg: any) => {
    this.handleSignupService.handleSignup(chatId, msg);
  };

  handleAdminLogin = (chatId: number, msg: any) => {
    this.adminLoginService.Login(chatId, msg);
  };

  start = () => {
    this.bot.once('message', (msg: any) => {
      const chatId = msg.chat.id;
        this.bot.sendMessage(
          chatId,
          "Welcome to Tarun NIT Weather Bot. You have to subscribe first in order to use me. May I know, are you a user or admin?",
        )
        this.bot.once('message', (msg: any) => {
          const chatId = msg.chat.id;
          if (msg.text.trim().toLowerCase() === "user") {
            this.handleSignup(chatId, msg);
          }
          else if (msg.text.trim().toLowerCase() === "admin") {
            this.handleAdminLogin(chatId, msg);
          }
          else if(msg.text){
            this.bot.sendMessage(chatId,"Sorry, I did not understand")
            this.start()
          }
        });
    });
  };
}
