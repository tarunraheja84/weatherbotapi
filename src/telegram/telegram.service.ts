import { Injectable } from '@nestjs/common';
import { StartService } from './services/start/start.service';

@Injectable()
export class TelegramService {

  constructor(private startService:StartService) {
    this.startService.start();
  }
  
}
