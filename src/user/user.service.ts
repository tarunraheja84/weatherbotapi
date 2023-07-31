import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './model/userSchema.models';

@Injectable()
export class UserService {
    constructor(@InjectModel('users') private userSchema: Model<User>) {}

    public async get() {
        return this.userSchema.find({});
    }

    public async getByEmail(email:string) {
        return this.userSchema.findOne({email:email});
    }

    public async create(req:any){
        const newUser = new this.userSchema(req.body);
        return newUser.save();
    }

    public async delete(email:string){
        return this.userSchema.deleteOne({email:email});
    }
}
