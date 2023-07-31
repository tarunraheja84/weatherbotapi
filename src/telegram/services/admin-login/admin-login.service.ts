import { Injectable } from '@nestjs/common';
import { BotService } from '../bot/bot.service';

@Injectable()
export class AdminLoginService {
    constructor(private botService:BotService){}
    bot = this.botService.getBotInstance()

    handleLogin=(chatId:any,msg:any)=>{

    }

    Login= async (chatId:any,msg:any)=>{
        const message=`<a href="https://weatherbotapi.vercel.app/auth">Click here</a> to verify your google account`
        this.bot.sendMessage(chatId, message, { parse_mode: 'HTML' });

        const response=await fetch('https://weatherbotapi.vercel.app/auth/google/callback')
        if(response){
            this.bot.sendMessage("You have successfully authorized")
            setTimeout(()=>{
                this.handleLogin(chatId,msg);
            },500)
        }
    }
}
