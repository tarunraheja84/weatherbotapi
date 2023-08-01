import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PswrdSchema } from './model/pswrdSchema.models';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';

@Module({
  imports:[MongooseModule.forRoot('mongodb+srv://tarun:Tarun%40123@cluster0.srw7o.mongodb.net/test',{dbName:'weatherdb'}),
  MongooseModule.forFeature([{ name: 'pswrd', schema: PswrdSchema }])],
  controllers: [PasswordController],
  providers: [PasswordService],
  exports: [PasswordService]
})
export class PasswordModule {}
