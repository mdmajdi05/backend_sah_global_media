import { SettingsService } from './settings.service';
import { CreateSettingDto, UpdateSettingDto } from './dtos/setting.dto';
export declare class SettingsController {
    private settingsService;
    constructor(settingsService: SettingsService);
    getPublicSettings(): Promise<Record<string, string | null>>;
    create(createSettingDto: CreateSettingDto): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        data: {
            updatedAt: Date;
            id: number;
            key: string;
            value: string | null;
            type: string;
        }[];
        total: number;
    }>;
    findByKey(key: string): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    update(key: string, updateSettingDto: UpdateSettingDto): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    uploadImage(key: string, file: Express.Multer.File): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    delete(key: string): Promise<void>;
    seedDefaults(): Promise<{
        seeded: number;
        total: number;
        message: string;
    }>;
}
