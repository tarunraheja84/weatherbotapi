import { Injectable } from '@nestjs/common';
const TelegramBot = require('node-telegram-bot-api');

// Telegram bot token
const TELEGRAM_TOKEN = "6054618964:AAHpgM7LJmM4ZQEQupMNSRDTfkCCod_u2Mg";

@Injectable()
export class BotService {
    public readonly bot: any;
    constructor(){
        this.bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
    }

    getBotInstance(): any {
        return this.bot;
      }
}
