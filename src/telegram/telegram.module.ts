import { Module } from '@nestjs/common';
import { HandleSignupService } from './services/signup/handle-signup.service';
import { TelegramService } from './telegram.service';
import { BotService } from './services/bot/bot.service';
import { WeatherService } from './services/weather/weather.service';
import { TelegramController } from './telegram.controller';
import { AdminLoginService } from './services/admin-login/admin-login.service';
import { StartService } from './services/start/start.service';


@Module({
  providers: [TelegramService, HandleSignupService, BotService, WeatherService, AdminLoginService, StartService],
  exports:[TelegramService],
  controllers: [TelegramController],
})
export class TelegramModule {}
