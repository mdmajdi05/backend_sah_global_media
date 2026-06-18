import { VideoTestimonialsService } from './video-testimonials.service';
import { CreateVideoTestimonialDto, UpdateVideoTestimonialDto } from './dtos/video-testimonial.dto';
export declare class VideoTestimonialsController {
    private service;
    constructor(service: VideoTestimonialsService);
    findActive(skip?: number, take?: number): Promise<{
        data: {
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
        }[];
        total: number;
    }>;
    create(dto: CreateVideoTestimonialDto, file?: Express.Multer.File): Promise<{
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
    findAll(skip?: number, take?: number): Promise<{
        data: {
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
        }[];
        total: number;
    }>;
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
    update(id: number, dto: UpdateVideoTestimonialDto, file?: Express.Multer.File): Promise<{
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
    delete(id: number): Promise<void>;
}
