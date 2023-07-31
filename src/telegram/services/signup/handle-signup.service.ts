import { Injectable } from '@nestjs/common';
import { BotService } from '../bot/bot.service';
import { WeatherService } from '../weather/weather.service';

function isEmail(input: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}  

@Injectable()
export class HandleSignupService {
    constructor(private botService:BotService,private weatherService:WeatherService){}
    bot = this.botService.getBotInstance()

    fetchWeather=async (chatId:any) => {
      try{
        this.bot.sendMessage(chatId, "Enter the name of the city weather of which you want to know.");
        this.bot.once('message',async (msg:any)=>{
          const response=await this.weatherService.fetchWeather(msg.text);
          const result=await response.json()
          if(response.ok){
            this.bot.sendMessage(chatId, `City: ${result.name}\nTemperature: ${result.main.temp}°C\nWeather: ${result.weather[0].main}`);
            setTimeout(()=>{
              this.fetchWeather(chatId);
            },500)
          }else{
            this.bot.sendMessage(chatId, "Such city does not exist");
            setTimeout(()=>{
              this.fetchWeather(chatId);
            },500)
          }
        })
      }catch(err){
        console.log(err);
      }
    }

    signup = async (chatId, obj) => {
        try {
          const response = await fetch('http:localhost:3000/auth/signup', {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(obj),
          });

          if (response.status===201) {
            this.bot.sendMessage(chatId, "Subscription Successful!");
            setTimeout(()=>{
              this.fetchWeather(chatId)
            },500)
            }
          else {
            this.bot.sendMessage(chatId, "Someone has already subscribed from this email id. Use other email id.");
          }
        } catch (error) {
          this.bot.sendMessage(chatId, "Error occurred during signup. Please try again later.");
          console.log(error)
        }
      };

      handleSignup = (chatId:any, msg:any) => {
        this.bot.sendMessage(chatId, "May I know your name please?");
      
        this.bot.once('message', (nameMsg) => {
          const name = nameMsg.text.trim();
          if (name.split(' ').length === 1 || name.split(' ').length === 2) {
            const obj = { name };
      
            this.bot.sendMessage(chatId, "May I know your email please?");
      
            this.bot.once('message', (emailMsg) => {
              const email = emailMsg.text.trim();
              if (isEmail(email)) {
                obj["email"] = email;
                this.signup(chatId, obj);
              } else {
                this.bot.sendMessage(chatId, "Invalid Email. Please enter your details again");
                setTimeout(() => {
                  this.handleSignup(chatId, msg);
                }, 500)
              }
            });
          } else {
            this.bot.sendMessage(chatId, "Please enter either the firstname or the firstname and lastname");
            setTimeout(() => {
              this.handleSignup(chatId, msg);
            }, 500)
          }
        });
      };
      
}
