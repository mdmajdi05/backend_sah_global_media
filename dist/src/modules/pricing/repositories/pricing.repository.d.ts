import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';
export declare class PricingRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }[]>;
    findById(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    } | null>;
    update(id: number, data: any): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }>;
    delete(id: number): Promise<void>;
    findActive(skip?: number, take?: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }[]>;
    countAll(): Promise<number>;
}
