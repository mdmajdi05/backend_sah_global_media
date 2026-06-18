import { PrismaService } from '../../../prisma/prisma.service';
export declare class SettingRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }[]>;
    findByKey(key: string): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    } | null>;
    update(key: string, data: any): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    upsert(key: string, data: any): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    delete(key: string): Promise<void>;
    countAll(): Promise<number>;
    getPublicSettings(): Promise<Record<string, string | null>>;
}
