import { BotService } from '../bot/bot.service';
import { AuthService } from '../auth/auth.service';
export declare class StartService {
    private botService;
    private authService;
    constructor(botService: BotService, authService: AuthService);
    bot: any;
    start: () => void;
}
