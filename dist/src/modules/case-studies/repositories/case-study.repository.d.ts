import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';
export declare class CaseStudyRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        result: string | null;
        order: number;
        isActive: boolean;
        description: string;
        category: string | null;
        image: string | null;
        title: string;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        result: string | null;
        order: number;
        isActive: boolean;
        description: string;
        category: string | null;
        image: string | null;
        title: string;
    }[]>;
    findById(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        result: string | null;
        order: number;
        isActive: boolean;
        description: string;
        category: string | null;
        image: string | null;
        title: string;
    } | null>;
    update(id: number, data: any): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        result: string | null;
        order: number;
        isActive: boolean;
        description: string;
        category: string | null;
        image: string | null;
        title: string;
    }>;
    delete(id: number): Promise<void>;
    findActive(skip?: number, take?: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        result: string | null;
        order: number;
        isActive: boolean;
        description: string;
        category: string | null;
        image: string | null;
        title: string;
    }[]>;
    countAll(): Promise<number>;
}
