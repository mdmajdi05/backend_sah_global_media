import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';
export declare class UserRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
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
    } | null>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        name: string | null;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    } | null>;
    update(id: number, data: any): Promise<{
        email: string;
        name: string | null;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    delete(id: number): Promise<void>;
    countAll(): Promise<number>;
}
