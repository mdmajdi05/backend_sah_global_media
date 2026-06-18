import { PricingService } from './pricing.service';
import { CreatePricingDto, UpdatePricingDto } from './dtos/pricing.dto';
export declare class PricingController {
    private pricingService;
    constructor(pricingService: PricingService);
    findAll(skip?: number, take?: number): Promise<{
        data: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            order: number;
            isActive: boolean;
            features: string[];
            price: string;
            isPopular: boolean;
        }[];
        total: number;
    }>;
    create(createPricingDto: CreatePricingDto): Promise<{
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
    findAllAdmin(skip?: number, take?: number): Promise<{
        data: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            order: number;
            isActive: boolean;
            features: string[];
            price: string;
            isPopular: boolean;
        }[];
        total: number;
    }>;
    findByIdAdmin(id: number): Promise<{
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
    update(id: number, updatePricingDto: UpdatePricingDto): Promise<{
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
}
