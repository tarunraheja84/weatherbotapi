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
        
        try{
            setTimeout(()=>{
                this.bot.sendMessage("Waiting for the server response....")
            },500)
            setTimeout(async ()=>{
                const response=await fetch('https://weatherbotapi.vercel.app/auth/google/callback')
                if(response){
                    this.bot.sendMessage("You have successfully authorized")
                    setTimeout(()=>{
                        this.handleLogin(chatId,msg);
                    },500)
                }
                else{
                    this.bot.sendMessage("You are not an authorized user")
                }
            },5000)
        }catch(err){
            console.log(err)
        }
       
    }
}
