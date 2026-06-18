import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, AuthResponseDto } from './dtos/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<AuthResponseDto>;
    login(loginDto: LoginDto): Promise<AuthResponseDto>;
}
