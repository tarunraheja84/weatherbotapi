import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
    fetchWeather=async (city:any)=>{
        try{
            const apiKey = '3701c28b1ac01a9e76bb88a56ee8201b';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const response=await fetch(url)
            return response;
        }
        catch(err){
            console.log(err)
        }
    }
}
