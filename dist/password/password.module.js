"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const pswrdSchema_models_1 = require("./model/pswrdSchema.models");
const password_controller_1 = require("./password.controller");
const password_service_1 = require("./password.service");
let PasswordModule = exports.PasswordModule = class PasswordModule {
};
exports.PasswordModule = PasswordModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb+srv://tarun:Tarun%40123@cluster0.srw7o.mongodb.net/test', { dbName: 'weatherdb' }),
            mongoose_1.MongooseModule.forFeature([{ name: 'pswrd', schema: pswrdSchema_models_1.PswrdSchema }])],
        controllers: [password_controller_1.PasswordController],
        providers: [password_service_1.PasswordService],
        exports: [password_service_1.PasswordService]
    })
], PasswordModule);
//# sourceMappingURL=password.module.js.map