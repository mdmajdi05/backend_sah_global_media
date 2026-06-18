import { ClientService } from './clients.service';
import { CreateClientDto, UpdateClientDto } from './dtos/client.dto';
export declare class ClientController {
    private clientService;
    constructor(clientService: ClientService);
    findAll(skip?: number, take?: number): Promise<{
        data: {
            name: string;
            createdAt: Date;
            id: number;
            order: number;
            isActive: boolean;
            logoUrl: string | null;
            testimonial: string | null;
            website: string | null;
        }[];
        total: number;
    }>;
    create(createClientDto: CreateClientDto, file?: Express.Multer.File): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }>;
    findAllAdmin(skip?: number, take?: number): Promise<{
        data: {
            name: string;
            createdAt: Date;
            id: number;
            order: number;
            isActive: boolean;
            logoUrl: string | null;
            testimonial: string | null;
            website: string | null;
        }[];
        total: number;
    }>;
    findByIdAdmin(id: number): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }>;
    update(id: number, updateClientDto: UpdateClientDto, file?: Express.Multer.File): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }>;
    delete(id: number): Promise<void>;
}
