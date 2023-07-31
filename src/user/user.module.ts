import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/userSchema.models';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[MongooseModule.forRoot('mongodb+srv://tarun:Tarun%40123@cluster0.srw7o.mongodb.net/test',{dbName:'weatherdb'}),
  MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
