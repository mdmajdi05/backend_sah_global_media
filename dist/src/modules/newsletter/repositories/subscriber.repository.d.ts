import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';
export declare class SubscriberRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    }[]>;
    findById(id: number): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    } | null>;
    update(id: number, data: any): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    }>;
    delete(id: number): Promise<void>;
    findByEmail(email: string): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    } | null>;
    countAll(): Promise<number>;
}
