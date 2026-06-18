import { BlogService } from './blog.service';
import { CreateBlogDto, UpdateBlogDto } from './dtos/blog.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    findAll(skip?: number, take?: number, category?: string): Promise<{
        data: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            category: string | null;
            title: string;
            slug: string;
            excerpt: string | null;
            content: string;
            featuredImage: string | null;
            authorName: string | null;
            publishedAt: Date;
            isPublished: boolean;
        }[];
        total: number;
    }>;
    findRelated(slug: string, category?: string): Promise<{
        id: number;
        title: string;
        slug: string;
        excerpt: string | null;
        featuredImage: string | null;
        publishedAt: Date;
    }[]>;
    getCategories(): Promise<string[]>;
    findBySlug(slug: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        category: string | null;
        title: string;
        slug: string;
        excerpt: string | null;
        content: string;
        featuredImage: string | null;
        authorName: string | null;
        publishedAt: Date;
        isPublished: boolean;
    }>;
    create(createBlogDto: CreateBlogDto, file?: Express.Multer.File): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        category: string | null;
        title: string;
        slug: string;
        excerpt: string | null;
        content: string;
        featuredImage: string | null;
        authorName: string | null;
        publishedAt: Date;
        isPublished: boolean;
    }>;
    findAllAdmin(skip?: number, take?: number): Promise<{
        data: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            category: string | null;
            title: string;
            slug: string;
            excerpt: string | null;
            content: string;
            featuredImage: string | null;
            authorName: string | null;
            publishedAt: Date;
            isPublished: boolean;
        }[];
        total: number;
    }>;
    findByIdAdmin(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        category: string | null;
        title: string;
        slug: string;
        excerpt: string | null;
        content: string;
        featuredImage: string | null;
        authorName: string | null;
        publishedAt: Date;
        isPublished: boolean;
    }>;
    update(id: number, updateBlogDto: UpdateBlogDto, file?: Express.Multer.File): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        category: string | null;
        title: string;
        slug: string;
        excerpt: string | null;
        content: string;
        featuredImage: string | null;
        authorName: string | null;
        publishedAt: Date;
        isPublished: boolean;
    }>;
    delete(id: number): Promise<void>;
}
