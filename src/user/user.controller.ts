import { Controller, Delete, Get, Post, Query, Req, Res } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('/user')
export class UserController{
    constructor(private userService:UserService){}

    @Get()
    public async getUsers(@Res() res: any) {
      try{
        const response = await this.userService.get();
        res.status(200).send(response);
      }catch(err){
        console.log(err)
      }
    }

    @Post()
    public async createUser(@Req() req:any, @Res() res: any){
        try{
          const response=await this.userService.create(req)
          res.status(201).send(response);
        }catch(err){
            res.status(400).send("email should be unique")
        }
    }

    @Delete()
    public async deleteUser(@Query('email') email:string,@Res() res: any){
      try{
        const response= await this.userService.delete(email);
        res.status(200).send(response);
      }catch(err){
        console.log(err)
      }
    }
}