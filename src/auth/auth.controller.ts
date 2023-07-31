import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/signup')
    public async signup(@Req() req:any,@Res() res:any){
        try{
            const response=await this.authService.createUser(req)
            res.send(response)
        }
        catch(err){
            console.log(err)
        }
    }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {}
  
    @Get('/google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
      return this.authService.googleLogin(req)
    }
}
