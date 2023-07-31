import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';

@Module({
    controllers:[AuthController],
    imports:[UserModule],
    exports:[AuthModule],
    providers: [AuthService,GoogleStrategy]
})
export class AuthModule {}
