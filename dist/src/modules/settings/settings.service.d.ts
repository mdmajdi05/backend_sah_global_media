import { SettingRepository } from './repositories/setting.repository';
export declare class SettingsService {
    private settingRepository;
    constructor(settingRepository: SettingRepository);
    create(createSettingDto: any): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }[]>;
    findByKey(key: string): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    update(key: string, updateSettingDto: any): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    upsert(key: string, updateSettingDto: any): Promise<{
        updatedAt: Date;
        id: number;
        key: string;
        value: string | null;
        type: string;
    }>;
    delete(key: string): Promise<void>;
    getPublicSettings(): Promise<Record<string, string | null>>;
    countAll(): Promise<number>;
    seedDefaults(): Promise<{
        seeded: number;
        total: number;
        message: string;
    }>;
}
