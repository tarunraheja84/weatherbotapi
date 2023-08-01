import { BotService } from '../bot/bot.service';
import { HandleSignupService } from '../signup/handle-signup.service';
export declare class StartService {
    private botService;
    private handleSignupService;
    constructor(botService: BotService, handleSignupService: HandleSignupService);
    bot: any;
    start: () => void;
}
