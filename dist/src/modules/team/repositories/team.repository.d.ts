import { PrismaService } from '../../../prisma/prisma.service';
import { IRepository } from '../../../common/repositories/repository.interface';
export declare class TeamRepository implements IRepository<any> {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }[]>;
    findById(id: number): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    } | null>;
    update(id: number, data: any): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }>;
    delete(id: number): Promise<void>;
    findActive(skip?: number, take?: number): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }[]>;
    countAll(): Promise<number>;
}
