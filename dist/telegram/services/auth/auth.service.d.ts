import { BotService } from '../bot/bot.service';
import { WeatherService } from '../weather/weather.service';
export declare class AuthService {
    private botService;
    private weatherService;
    constructor(botService: BotService, weatherService: WeatherService);
    bot: any;
    start: () => void;
    fetchWeather: (chatId: any) => Promise<void>;
    signup: (chatId: any, obj: any) => Promise<void>;
    handleSignup: (chatId: any, msg: any) => void;
    handleLogin: (chatId: any, msg: any) => void;
    Login: (chatId: any, msg: any) => Promise<void>;
}
