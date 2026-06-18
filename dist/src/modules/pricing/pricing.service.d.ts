import { PricingRepository } from './repositories/pricing.repository';
export declare class PricingService {
    private pricingRepository;
    constructor(pricingRepository: PricingRepository);
    create(createPricingDto: any): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }[]>;
    findById(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }>;
    findActive(skip?: number, take?: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }[]>;
    update(id: number, updatePricingDto: any): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        features: string[];
        price: string;
        isPopular: boolean;
    }>;
    delete(id: number): Promise<void>;
    countAll(): Promise<number>;
}
