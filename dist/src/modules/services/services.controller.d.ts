import { ServiceService } from './services.service';
import { CreateServiceCategoryDto, UpdateServiceCategoryDto, CreateSubServiceDto, UpdateSubServiceDto } from './dtos/service.dto';
export declare class ServiceController {
    private serviceService;
    constructor(serviceService: ServiceService);
    findAllCategories(): Promise<({
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    })[]>;
    createCategory(createCategoryDto: CreateServiceCategoryDto): Promise<{
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    }>;
    findAllCategoriesAdmin(skip?: number, take?: number): Promise<{
        data: ({
            subServices: {
                name: string;
                id: number;
                icon: string | null;
                order: number;
                isActive: boolean;
                description: string | null;
                features: string[];
                serviceCategoryId: number;
            }[];
        } & {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        })[];
        total: number;
    }>;
    findCategoryById(id: number): Promise<{
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    }>;
    updateCategory(id: number, updateCategoryDto: UpdateServiceCategoryDto): Promise<{
        subServices: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
    }>;
    deleteCategory(id: number): Promise<void>;
    createSubService(createSubServiceDto: CreateSubServiceDto): Promise<{
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    }>;
    findAllSubServicesAdmin(skip?: number, take?: number): Promise<{
        data: ({
            category: {
                name: string;
                id: number;
                icon: string | null;
                order: number;
                isActive: boolean;
            };
        } & {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
            description: string | null;
            features: string[];
            serviceCategoryId: number;
        })[];
        total: number;
    }>;
    findSubServiceById(id: number): Promise<{
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    }>;
    findSubServicesByCategory(categoryId: number, skip?: number, take?: number): Promise<({
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    })[]>;
    updateSubService(id: number, updateSubServiceDto: UpdateSubServiceDto): Promise<{
        category: {
            name: string;
            id: number;
            icon: string | null;
            order: number;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        icon: string | null;
        order: number;
        isActive: boolean;
        description: string | null;
        features: string[];
        serviceCategoryId: number;
    }>;
    deleteSubService(id: number): Promise<void>;
}
