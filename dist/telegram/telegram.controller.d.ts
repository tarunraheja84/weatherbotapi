import { WeatherService } from './services/weather/weather.service';
export declare class TelegramController {
    private weatherService;
    constructor(weatherService: WeatherService);
    fetchWeather(req: any, res: any): Promise<void>;
}
