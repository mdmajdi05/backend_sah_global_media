export declare class CreateTeamDto {
    name: string;
    role: string;
    bio?: string;
    profileImage?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    socialLinks?: string;
    order?: number;
    isActive?: boolean;
}
export declare class UpdateTeamDto {
    name?: string;
    role?: string;
    bio?: string;
    profileImage?: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    socialLinks?: string;
    order?: number;
    isActive?: boolean;
}
