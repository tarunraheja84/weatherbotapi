import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
    },
);

export interface User extends Document {
    readonly name: string;
    readonly email: string;
}