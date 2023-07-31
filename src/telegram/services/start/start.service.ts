import { Injectable } from '@nestjs/common';
import { AdminLoginService } from '../admin-login/admin-login.service';
import { BotService } from '../bot/bot.service';
import { HandleSignupService } from '../signup/handle-signup.service';

@Injectable()
export class StartService {
    constructor(private botService:BotService,private handleSignupService:HandleSignupService,private adminLoginService:AdminLoginService){}
    bot = this.botService.getBotInstance()

    start = () => {
        this.bot.once('message', (msg: any) => {
          const chatId = msg.chat.id;
            this.bot.sendMessage(
              chatId,
              "Welcome to Tarun NIT Weather Bot. Type exit to exit any process at any time.",
            )
            setTimeout(()=>{
              this.bot.sendMessage(
                chatId,
                "May I know, are you a user or admin?",
              )
            },500)
            this.bot.once('message', (msg: any) => {
              const chatId = msg.chat.id;
              if (msg.text.trim().toLowerCase() === "user") {
                this.handleSignupService.handleSignup(chatId, msg);
              }
              else if (msg.text.trim().toLowerCase() === "admin") {
                this.adminLoginService.Login(chatId, msg);
              }
              else if(msg.text.trim().toLowerCase()==="exit"){
                this.bot.sendMessage(chatId,"You have successfully exited. Type something to continue again")
                this.start()
              }
              else if(msg.text){
                this.bot.sendMessage(chatId,"Sorry, I did not understand")
                this.start()
              }
            });
        });
      };
}
