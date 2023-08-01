"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordController = void 0;
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
let PasswordController = exports.PasswordController = class PasswordController {
    constructor(pswrdService) {
        this.pswrdService = pswrdService;
    }
    async getUsers(res) {
        try {
            const response = await this.pswrdService.get();
            res.status(200).send(response);
        }
        catch (err) {
            console.log(err);
        }
    }
    async createUser(req, res) {
        try {
            const response = await this.pswrdService.create(req);
            res.status(201).send(response);
        }
        catch (err) {
            res.status(400).send("email should be unique");
        }
    }
    async deleteUser(res) {
        try {
            const response = await this.pswrdService.delete();
            res.status(200).send(response);
        }
        catch (err) {
            console.log(err);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PasswordController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PasswordController.prototype, "createUser", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PasswordController.prototype, "deleteUser", null);
exports.PasswordController = PasswordController = __decorate([
    (0, common_1.Controller)('password'),
    __metadata("design:paramtypes", [password_service_1.PasswordService])
], PasswordController);
//# sourceMappingURL=password.controller.js.map