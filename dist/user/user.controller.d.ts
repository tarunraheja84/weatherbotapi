import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(res: any): Promise<void>;
    createUser(req: any, res: any): Promise<void>;
    deleteUser(email: string, res: any): Promise<void>;
}
