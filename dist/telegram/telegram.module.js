"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./services/auth/auth.service");
const telegram_service_1 = require("./telegram.service");
const bot_service_1 = require("./services/bot/bot.service");
const weather_service_1 = require("./services/weather/weather.service");
const telegram_controller_1 = require("./telegram.controller");
const start_service_1 = require("./services/start/start.service");
let TelegramModule = exports.TelegramModule = class TelegramModule {
};
exports.TelegramModule = TelegramModule = __decorate([
    (0, common_1.Module)({
        providers: [telegram_service_1.TelegramService, auth_service_1.AuthService, bot_service_1.BotService, weather_service_1.WeatherService, start_service_1.StartService],
        exports: [telegram_service_1.TelegramService],
        controllers: [telegram_controller_1.TelegramController],
    })
], TelegramModule);
//# sourceMappingURL=telegram.module.js.map