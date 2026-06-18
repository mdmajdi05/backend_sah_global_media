import { VideoTestimonialRepository } from './repositories/video-testimonial.repository';
export declare class VideoTestimonialsService {
    private repo;
    constructor(repo: VideoTestimonialRepository);
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
    findById(id: number): Promise<{
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
    }>;
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
    update(id: number, data: any): Promise<{
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
    }>;
    delete(id: number): Promise<{
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
    }>;
}
