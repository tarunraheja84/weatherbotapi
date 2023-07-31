import { Module } from "@nestjs/common";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TelegramModule } from "./telegram/telegram.module";

@Module({
    imports: [UserModule, AuthModule, TelegramModule],
})
export class AppModule{}