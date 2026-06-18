import { CaseStudyRepository } from './repositories/case-study.repository';
export declare class CaseStudyService {
    private caseStudyRepository;
    constructor(caseStudyRepository: CaseStudyRepository);
    create(createCaseStudyDto: any): Promise<{
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
    findAll(skip?: number, take?: number): Promise<{
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
    }[]>;
    findById(id: number): Promise<{
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
    findActive(skip?: number, take?: number): Promise<{
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
    }[]>;
    update(id: number, updateCaseStudyDto: any): Promise<{
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
    countAll(): Promise<number>;
}
