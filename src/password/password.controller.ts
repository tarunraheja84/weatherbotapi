import { Controller, Delete, Get, Post, Query, Req, Res } from '@nestjs/common';
import { PasswordService } from './password.service';

@Controller('password')
export class PasswordController {
    constructor(private pswrdService:PasswordService){}
    @Get()
    public async getUsers(@Res() res: any) {
      try{
        const response = await this.pswrdService.get();
        res.status(200).send(response);
      }catch(err){
        console.log(err)
      }
    }

    @Post()
    public async createUser(@Req() req:any, @Res() res: any){
        try{
          const response=await this.pswrdService.create(req)
          res.status(201).send(response);
        }catch(err){
            res.status(400).send("email should be unique")
        }
    }

    @Delete()
    public async deleteUser(@Res() res: any){
      try{
        const response= await this.pswrdService.delete();
        res.status(200).send(response);
      }catch(err){
        console.log(err)
      }
    }
}
