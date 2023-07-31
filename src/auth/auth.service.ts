import { Injectable, Req} from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService:UserService){}

    async createUser(@Req() req:any){
        try{
            const user=await this.userService.create(req)
                return user;
            }catch(err){
                console.log(err)
            }
        }

    googleLogin(req:any) {
        if (!req.user) {
            return null
        }
        return req.user
        }
}
