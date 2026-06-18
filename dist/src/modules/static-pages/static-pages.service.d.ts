import { StaticPageRepository } from './repositories/static-page.repository';
export declare class StaticPagesService {
    private repo;
    constructor(repo: StaticPageRepository);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        slug: string;
        content: string;
    }[]>;
    findBySlug(slug: string): import(".prisma/client").Prisma.Prisma__StaticPageClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        slug: string;
        content: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    upsert(slug: string, data: {
        title?: string;
        content?: string;
    }): import(".prisma/client").Prisma.Prisma__StaticPageClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        slug: string;
        content: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
