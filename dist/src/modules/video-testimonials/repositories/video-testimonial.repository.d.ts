import { PrismaService } from '../../../prisma/prisma.service';
export declare class VideoTestimonialRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(skip?: number, take?: number): import(".prisma/client").Prisma.PrismaPromise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        title: string;
        videoUrl: string;
        clientName: string;
        clientRole: string | null;
        thumbnail: string | null;
    }[]>;
    findActive(skip?: number, take?: number): import(".prisma/client").Prisma.PrismaPromise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        title: string;
        videoUrl: string;
        clientName: string;
        clientRole: string | null;
        thumbnail: string | null;
    }[]>;
    findById(id: number): import(".prisma/client").Prisma.Prisma__VideoTestimonialClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        title: string;
        videoUrl: string;
        clientName: string;
        clientRole: string | null;
        thumbnail: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    countAll(): import(".prisma/client").Prisma.PrismaPromise<number>;
    create(data: any): import(".prisma/client").Prisma.Prisma__VideoTestimonialClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        title: string;
        videoUrl: string;
        clientName: string;
        clientRole: string | null;
        thumbnail: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: any): import(".prisma/client").Prisma.Prisma__VideoTestimonialClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        title: string;
        videoUrl: string;
        clientName: string;
        clientRole: string | null;
        thumbnail: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): import(".prisma/client").Prisma.Prisma__VideoTestimonialClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        title: string;
        videoUrl: string;
        clientName: string;
        clientRole: string | null;
        thumbnail: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
