import { Controller, Post, Req, Res } from '@nestjs/common';
import { WeatherService } from './services/weather/weather.service';

@Controller('telegram')
export class TelegramController {
    constructor(private weatherService:WeatherService){}
        @Post()
        async fetchWeather(@Req() req:any,@Res() res:any){
            try{
                const response=await this.weatherService.fetchWeather(req)
                const result=await response.json()
                res.status(200).send(result)
            }catch(err){
                console.log(err)
            }
        }
}
