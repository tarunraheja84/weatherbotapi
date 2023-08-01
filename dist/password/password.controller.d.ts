import { PasswordService } from './password.service';
export declare class PasswordController {
    private pswrdService;
    constructor(pswrdService: PasswordService);
    getUsers(res: any): Promise<void>;
    createUser(req: any, res: any): Promise<void>;
    deleteUser(res: any): Promise<void>;
}
