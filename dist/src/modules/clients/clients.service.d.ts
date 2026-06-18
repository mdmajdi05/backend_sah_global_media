import { ClientRepository } from './repositories/client.repository';
export declare class ClientService {
    private clientRepository;
    constructor(clientRepository: ClientRepository);
    create(createClientDto: any): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }[]>;
    findById(id: number): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }>;
    findActive(skip?: number, take?: number): Promise<{
        name: string;
        createdAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        logoUrl: string | null;
        testimonial: string | null;
        website: string | null;
    }[]>;
    update(id: number, updateClientDto: any): Promise<{
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
    countAll(): Promise<number>;
}
