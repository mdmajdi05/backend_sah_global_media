import { ServiceCategoryRepository, SubServiceRepository } from './repositories/service.repository';
export declare class ServiceService {
    private serviceCategoryRepository;
    private subServiceRepository;
    constructor(serviceCategoryRepository: ServiceCategoryRepository, subServiceRepository: SubServiceRepository);
    createCategory(createCategoryDto: any): Promise<{
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
    findAllCategories(skip?: number, take?: number): Promise<({
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
    findActiveCategories(skip?: number, take?: number): Promise<({
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
    updateCategory(id: number, updateCategoryDto: any): Promise<{
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
    countCategories(): Promise<number>;
    createSubService(createSubServiceDto: any): Promise<{
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
    findAllSubServices(skip?: number, take?: number): Promise<({
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
    findSubServicesByCategoryId(categoryId: number, skip?: number, take?: number): Promise<({
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
    findActiveSubServices(skip?: number, take?: number): Promise<({
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
    updateSubService(id: number, updateSubServiceDto: any): Promise<{
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
    countSubServices(): Promise<number>;
}
