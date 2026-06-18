import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';
export declare class ClientRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }[]>;
    findById(id: number): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    } | null>;
    update(id: number, data: any): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }>;
    delete(id: number): Promise<void>;
    findActive(skip?: number, take?: number): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }[]>;
    countAll(): Promise<number>;
}
