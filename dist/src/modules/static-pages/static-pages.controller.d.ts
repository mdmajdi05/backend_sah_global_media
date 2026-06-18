import { StaticPagesService } from './static-pages.service';
import { UpdateStaticPageDto } from './dtos/static-page.dto';
export declare class StaticPagesController {
    private service;
    constructor(service: StaticPagesService);
    getPage(slug: string): import(".prisma/client").Prisma.Prisma__StaticPageClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        slug: string;
        content: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    listPages(): import(".prisma/client").Prisma.PrismaPromise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        slug: string;
        content: string;
    }[]>;
    updatePage(slug: string, dto: UpdateStaticPageDto): import(".prisma/client").Prisma.Prisma__StaticPageClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        slug: string;
        content: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
