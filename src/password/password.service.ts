import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Password } from './model/pswrdSchema.models';

@Injectable()
export class PasswordService {
    constructor(@InjectModel('pswrd') private pswrdSchema: Model<Password>) {}

    public async get() {
        return this.pswrdSchema.find({});
    }

    public async create(req:any){
        const newUser = new this.pswrdSchema(req.body);
        return newUser.save();
    }

    public async delete(){
        return this.pswrdSchema.deleteMany({});
    }
}
