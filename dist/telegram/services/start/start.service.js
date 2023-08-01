"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartService = void 0;
const common_1 = require("@nestjs/common");
const bot_service_1 = require("../bot/bot.service");
const auth_service_1 = require("../auth/auth.service");
let StartService = exports.StartService = class StartService {
    constructor(botService, authService) {
        this.botService = botService;
        this.authService = authService;
        this.bot = this.botService.getBotInstance();
        this.start = () => {
            this.bot.once('message', (msg) => {
                const chatId = msg.chat.id;
                this.bot.sendMessage(chatId, "Welcome to Tarun NIT Weather Bot. Type exit to exit any process at any time.");
                setTimeout(() => {
                    this.bot.sendMessage(chatId, "May I know, are you a user or admin?");
                }, 500);
                this.bot.once('message', (msg) => {
                    const chatId = msg.chat.id;
                    if (msg.text.trim().toLowerCase() === "user") {
                        this.authService.handleSignup(chatId, msg);
                    }
                    else if (msg.text.trim().toLowerCase() === "admin") {
                        this.authService.Login(chatId, msg);
                    }
                    else if (msg.text.trim().toLowerCase() === "exit") {
                        this.bot.sendMessage(chatId, "You have successfully exited. Type something to continue again");
                        this.start();
                    }
                    else if (msg.text) {
                        this.bot.sendMessage(chatId, "Sorry, I did not understand");
                        this.start();
                    }
                });
            });
        };
    }
};
exports.StartService = StartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bot_service_1.BotService, auth_service_1.AuthService])
], StartService);
//# sourceMappingURL=start.service.js.map