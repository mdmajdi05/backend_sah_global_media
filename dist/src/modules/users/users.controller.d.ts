import { UserService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        password: string;
        name: string | null;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        data: {
            email: string;
            name: string | null;
            role: string;
            createdAt: Date;
            id: number;
        }[];
        total: number;
    }>;
    findById(id: number): Promise<{
        email: string;
        name: string | null;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        name: string | null;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    delete(id: number): Promise<void>;
}
