import { CaseStudyService } from './case-studies.service';
import { CreateCaseStudyDto, UpdateCaseStudyDto } from './dtos/case-study.dto';
export declare class CaseStudyController {
    private caseStudyService;
    constructor(caseStudyService: CaseStudyService);
    findAll(skip?: number, take?: number): Promise<{
        data: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            result: string | null;
            order: number;
            isActive: boolean;
            description: string;
            category: string | null;
            image: string | null;
            title: string;
        }[];
        total: number;
    }>;
    create(createCaseStudyDto: CreateCaseStudyDto, file?: Express.Multer.File): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        result: string | null;
        order: number;
        isActive: boolean;
        description: string;
        category: string | null;
        image: string | null;
        title: string;
    }>;
    findAllAdmin(skip?: number, take?: number): Promise<{
        data: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            result: string | null;
            order: number;
            isActive: boolean;
            description: string;
            category: string | null;
            image: string | null;
            title: string;
        }[];
        total: number;
    }>;
    findByIdAdmin(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        result: string | null;
        order: number;
        isActive: boolean;
        description: string;
        category: string | null;
        image: string | null;
        title: string;
    }>;
    update(id: number, updateCaseStudyDto: UpdateCaseStudyDto, file?: Express.Multer.File): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        result: string | null;
        order: number;
        isActive: boolean;
        description: string;
        category: string | null;
        image: string | null;
        title: string;
    }>;
    delete(id: number): Promise<void>;
}
