import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { TelegramService } from './telegram.service';
import { BotService } from './services/bot/bot.service';
import { WeatherService } from './services/weather/weather.service';
import { TelegramController } from './telegram.controller';
import { StartService } from './services/start/start.service';


@Module({
  providers: [TelegramService, AuthService, BotService, WeatherService, StartService],
  exports:[TelegramService],
  controllers: [TelegramController],
})
export class TelegramModule {}
