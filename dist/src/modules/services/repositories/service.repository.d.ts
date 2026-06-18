import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';
export declare class ServiceCategoryRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    }>;
    findAll(skip?: number, take?: number): Promise<({
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    })[]>;
    findById(id: number): Promise<({
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    }) | null>;
    update(id: number, data: any): Promise<{
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    }>;
    delete(id: number): Promise<void>;
    findActive(skip?: number, take?: number): Promise<({
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    })[]>;
    countAll(): Promise<number>;
}
export declare class SubServiceRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    }>;
    findAll(skip?: number, take?: number): Promise<({
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    })[]>;
    findById(id: number): Promise<({
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    }) | null>;
    findByCategoryId(categoryId: number, skip?: number, take?: number): Promise<({
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    })[]>;
    update(id: number, data: any): Promise<{
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    }>;
    delete(id: number): Promise<void>;
    findActive(skip?: number, take?: number): Promise<({
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    })[]>;
    countAll(): Promise<number>;
}
