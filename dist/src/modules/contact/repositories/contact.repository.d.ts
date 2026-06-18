import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';
export declare class ContactRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }[]>;
    findById(id: number): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    } | null>;
    update(id: number, data: any): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }>;
    delete(id: number): Promise<void>;
    countAll(): Promise<number>;
    findUnread(): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }[]>;
    markAsRead(id: number): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }>;
}
