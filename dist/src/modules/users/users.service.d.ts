import { UserRepository } from './repositories/user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    create(createUserDto: any): Promise<{
        email: string;
        password: string;
        name: string | null;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        email: string;
        name: string | null;
        role: string;
        createdAt: Date;
        id: number;
    }[]>;
    findById(id: number): Promise<{
        email: string;
        name: string | null;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        name: string | null;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, updateUserDto: any): Promise<{
        email: string;
        name: string | null;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    delete(id: number): Promise<void>;
    countAll(): Promise<number>;
}
