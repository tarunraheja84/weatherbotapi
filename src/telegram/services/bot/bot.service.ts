import { Injectable } from '@nestjs/common';
const TelegramBot = require('node-telegram-bot-api');

// Telegram bot token
const TELEGRAM_TOKEN = "6054618964:AAHpgM7LJmM4ZQEQupMNSRDTfkCCod_u2Mg";
const WEBHOOK_URL = "https://weatherbotapi.vercel.app";

@Injectable()
export class BotService {
    public readonly bot: any;
    constructor(){
        this.bot = new TelegramBot(TELEGRAM_TOKEN);
        this.bot.setWebHook(WEBHOOK_URL)
        .then(() => {
            console.log('Webhook set up successfully!');
        })
        .catch((error) => {
            console.error('Error setting up webhook:', error);
        });
    }

    getBotInstance(): any {
        return this.bot;
      }
}
