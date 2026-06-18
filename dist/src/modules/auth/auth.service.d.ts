import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dtos/auth.dto';
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            name: string | null;
            role: string;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: number;
            email: string;
            name: string | null;
            role: string;
        };
    }>;
    validateUser(id: number): Promise<{
        email: string;
        name: string | null;
        role: string;
        id: number;
    } | null>;
}
