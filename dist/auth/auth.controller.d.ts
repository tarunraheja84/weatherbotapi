import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    user: any;
    signup(req: any, res: any): Promise<void>;
    googleAuth(req: any): void;
    googleAuthRedirect(req: any): string;
    getAdmin(res: any): void;
}
