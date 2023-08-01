import { Module } from "@nestjs/common";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TelegramModule } from "./telegram/telegram.module";
import { PasswordController } from './password/password.controller';
import { PasswordModule } from './password/password.module';

@Module({
    imports: [UserModule, AuthModule, TelegramModule, PasswordModule],
    controllers: [PasswordController],
})
export class AppModule{}