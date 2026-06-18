export declare class CreatePricingDto {
    name: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    order?: number;
    isActive?: boolean;
}
export declare class UpdatePricingDto {
    name?: string;
    price?: string;
    features?: string[];
    isPopular?: boolean;
    order?: number;
    isActive?: boolean;
}
