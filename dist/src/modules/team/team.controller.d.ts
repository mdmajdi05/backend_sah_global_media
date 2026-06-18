import { TeamService } from './team.service';
import { CreateTeamDto, UpdateTeamDto } from './dtos/team.dto';
export declare class TeamController {
    private teamService;
    constructor(teamService: TeamService);
    findAll(skip?: number, take?: number): Promise<{
        data: {
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
        }[];
        total: number;
    }>;
    create(createTeamDto: CreateTeamDto, file?: Express.Multer.File): Promise<{
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
    findAllAdmin(skip?: number, take?: number): Promise<{
        data: {
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
        }[];
        total: number;
    }>;
    findByIdAdmin(id: number): Promise<{
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
    update(id: number, updateTeamDto: UpdateTeamDto, file?: Express.Multer.File): Promise<{
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
}
