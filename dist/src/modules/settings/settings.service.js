"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const setting_repository_1 = require("./repositories/setting.repository");
const DEFAULT_SETTINGS = [
    { key: 'siteName', value: 'Sah Global Media', type: 'text' },
    { key: 'logoUrl', value: '', type: 'image' },
    { key: 'favicon', value: '', type: 'image' },
    { key: 'developedBy', value: '', type: 'text' },
    { key: 'footerText', value: '', type: 'text' },
    { key: 'heroHeading', value: 'Transform Your Digital Presence', type: 'text' },
    { key: 'heroSubheading', value: 'Expert digital marketing, video production, and web development services that drive real results.', type: 'text' },
    { key: 'heroCta', value: 'Get Free Consultation', type: 'text' },
    { key: 'heroCtaLink', value: '/contact', type: 'text' },
    { key: 'heroImageUrl', value: '', type: 'image' },
    { key: 'heroVideoUrl', value: '', type: 'text' },
    { key: 'contactEmail', value: '', type: 'text' },
    { key: 'contactPhone', value: '', type: 'text' },
    { key: 'address', value: '', type: 'text' },
    { key: 'mapEmbedUrl', value: '', type: 'text' },
    { key: 'facebookUrl', value: '', type: 'text' },
    { key: 'instagramUrl', value: '', type: 'text' },
    { key: 'linkedinUrl', value: '', type: 'text' },
    { key: 'twitterUrl', value: '', type: 'text' },
    { key: 'youtubeUrl', value: '', type: 'text' },
    { key: 'socialLinks', value: '[]', type: 'json' },
    { key: 'whatsappEnabled', value: 'false', type: 'boolean' },
    { key: 'whatsappNumber', value: '', type: 'text' },
    { key: 'whatsappMessage', value: "Hi! I'm interested in your services.", type: 'text' },
    { key: 'whatsappPosition', value: 'bottom-right', type: 'text' },
    { key: 'popupEnabled', value: 'false', type: 'boolean' },
    { key: 'popupOfferText', value: '', type: 'text' },
    { key: 'popupOfferButtonText', value: 'Claim Offer', type: 'text' },
    { key: 'popupButtonLink', value: '/contact', type: 'text' },
    { key: 'popupDelay', value: '3', type: 'text' },
    { key: 'popupFrequency', value: 'once-per-session', type: 'text' },
    { key: 'popupBgImage', value: '', type: 'image' },
    { key: 'floatingBellEnabled', value: 'false', type: 'boolean' },
    { key: 'floatingBellMessage', value: '', type: 'text' },
    { key: 'floatingBellLink', value: '', type: 'text' },
    { key: 'floatingBellIcon', value: 'Bell', type: 'text' },
    { key: 'floatingBellColor', value: '#6366f1', type: 'color' },
    { key: 'alertBarEnabled', value: 'false', type: 'boolean' },
    { key: 'alertBarMessage', value: '', type: 'text' },
    { key: 'alertBarType', value: 'info', type: 'text' },
    { key: 'alertBarLink', value: '', type: 'text' },
    { key: 'alertBarBgColor', value: '', type: 'color' },
    { key: 'alertBarTextColor', value: '', type: 'color' },
    { key: 'alertBarDismissible', value: 'true', type: 'boolean' },
    { key: 'ogImageUrl', value: '', type: 'image' },
    { key: 'metaKeywords', value: '', type: 'text' },
    { key: 'colorPrimary', value: '#7c3aed', type: 'color' },
    { key: 'colorAccent', value: '#0ea5e9', type: 'color' },
    { key: 'colorBackground', value: '#04060f', type: 'color' },
    { key: 'colorForeground', value: '#e8eaf6', type: 'color' },
    { key: 'colorCard', value: '#0d1117', type: 'color' },
];
let SettingsService = class SettingsService {
    settingRepository;
    constructor(settingRepository) {
        this.settingRepository = settingRepository;
    }
    async create(createSettingDto) {
        return this.settingRepository.create(createSettingDto);
    }
    async findAll(skip = 0, take = 100) {
        return this.settingRepository.findAll(skip, take);
    }
    async findByKey(key) {
        const setting = await this.settingRepository.findByKey(key);
        if (!setting) {
            throw new common_1.NotFoundException(`Setting with key ${key} not found`);
        }
        return setting;
    }
    async update(key, updateSettingDto) {
        const setting = await this.settingRepository.findByKey(key);
        if (!setting) {
            throw new common_1.NotFoundException(`Setting with key ${key} not found`);
        }
        return this.settingRepository.update(key, updateSettingDto);
    }
    async upsert(key, updateSettingDto) {
        return this.settingRepository.upsert(key, updateSettingDto);
    }
    async delete(key) {
        const setting = await this.settingRepository.findByKey(key);
        if (!setting) {
            throw new common_1.NotFoundException(`Setting with key ${key} not found`);
        }
        return this.settingRepository.delete(key);
    }
    async getPublicSettings() {
        return this.settingRepository.getPublicSettings();
    }
    async countAll() {
        return this.settingRepository.countAll();
    }
    async seedDefaults() {
        let created = 0;
        for (const def of DEFAULT_SETTINGS) {
            const existing = await this.settingRepository.findByKey(def.key);
            if (!existing) {
                await this.settingRepository.create({ key: def.key, value: def.value, type: def.type });
                created++;
            }
        }
        return { seeded: created, total: DEFAULT_SETTINGS.length, message: `Initialized ${created} new settings` };
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [setting_repository_1.SettingRepository])
], SettingsService);
//# sourceMappingURL=settings.service.js.map