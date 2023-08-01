import * as mongoose from 'mongoose';
export const PswrdSchema = new mongoose.Schema({
        password:{
            type:String,
            required:true,
        },
    },
);

export interface Password extends Document {
    readonly password: string;
}