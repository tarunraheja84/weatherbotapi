import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password: string;
}, mongoose.Document<unknown, {}, {
    password: string;
}> & {
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export interface User extends Document {
    readonly password: string;
}
