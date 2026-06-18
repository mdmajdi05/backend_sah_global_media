import { TeamRepository } from './repositories/team.repository';
export declare class TeamService {
    private teamRepository;
    constructor(teamRepository: TeamRepository);
    create(createTeamDto: any): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }[]>;
    findById(id: number): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }>;
    findActive(skip?: number, take?: number): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }[]>;
    update(id: number, updateTeamDto: any): Promise<{
        name: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        order: number;
        isActive: boolean;
        linkedinUrl: string | null;
        twitterUrl: string | null;
        bio: string | null;
        profileImage: string | null;
        socialLinks: string | null;
    }>;
    delete(id: number): Promise<void>;
    countAll(): Promise<number>;
}
