export declare class CreateBlogDto {
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    featuredImage?: string;
    category?: string;
    authorName?: string;
    isPublished?: boolean;
}
export declare class UpdateBlogDto {
    title?: string;
    slug?: string;
    excerpt?: string;
    content?: string;
    featuredImage?: string;
    category?: string;
    authorName?: string;
    isPublished?: boolean;
}
