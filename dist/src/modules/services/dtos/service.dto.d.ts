export declare class CreateServiceCategoryDto {
    name: string;
    icon?: string;
    order?: number;
    isActive?: boolean;
}
export declare class UpdateServiceCategoryDto {
    name?: string;
    icon?: string;
    order?: number;
    isActive?: boolean;
}
export declare class CreateSubServiceDto {
    name: string;
    description?: string;
    features: string[];
    icon?: string;
    serviceCategoryId: number;
    order?: number;
    isActive?: boolean;
}
export declare class UpdateSubServiceDto {
    name?: string;
    description?: string;
    features?: string[];
    icon?: string;
    serviceCategoryId?: number;
    order?: number;
    isActive?: boolean;
}
