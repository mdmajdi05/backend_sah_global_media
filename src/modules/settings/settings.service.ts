import { Injectable, NotFoundException } from '@nestjs/common';
import { SettingRepository } from './repositories/setting.repository';

const DEFAULT_SETTINGS: { key: string; value: string; type: string }[] = [
  // Site Identity
  { key: 'siteName',    value: 'Sah Global Media', type: 'text' },
  { key: 'logoUrl',     value: '',                  type: 'image' },
  { key: 'favicon',     value: '',                  type: 'image' },
  { key: 'developedBy', value: '',                  type: 'text' },
  { key: 'footerText',  value: '',                  type: 'text' },

  // Hero Section
  { key: 'heroHeading',    value: 'Transform Your Digital Presence', type: 'text' },
  { key: 'heroSubheading', value: 'Expert digital marketing, video production, and web development services that drive real results.', type: 'text' },
  { key: 'heroCta',        value: 'Get Free Consultation', type: 'text' },
  { key: 'heroCtaLink',    value: '/contact',              type: 'text' },
  { key: 'heroImageUrl',   value: '',                      type: 'image' },
  { key: 'heroVideoUrl',   value: '',                      type: 'text' },

  // Contact Info
  { key: 'contactEmail', value: '', type: 'text' },
  { key: 'contactPhone', value: '', type: 'text' },
  { key: 'address',      value: '', type: 'text' },
  { key: 'mapEmbedUrl',  value: '', type: 'text' },

  // Social Links (fixed)
  { key: 'facebookUrl',  value: '', type: 'text' },
  { key: 'instagramUrl', value: '', type: 'text' },
  { key: 'linkedinUrl',  value: '', type: 'text' },
  { key: 'twitterUrl',   value: '', type: 'text' },
  { key: 'youtubeUrl',   value: '', type: 'text' },
  // Dynamic social links stored as JSON array
  { key: 'socialLinks',  value: '[]', type: 'json' },

  // WhatsApp Widget
  { key: 'whatsappEnabled',  value: 'false',          type: 'boolean' },
  { key: 'whatsappNumber',   value: '',               type: 'text' },
  { key: 'whatsappMessage',  value: "Hi! I'm interested in your services.", type: 'text' },
  { key: 'whatsappPosition', value: 'bottom-right',   type: 'text' },

  // Popup Offer
  { key: 'popupEnabled',         value: 'false',              type: 'boolean' },
  { key: 'popupOfferText',       value: '',                   type: 'text' },
  { key: 'popupOfferButtonText', value: 'Claim Offer',        type: 'text' },
  { key: 'popupButtonLink',      value: '/contact',           type: 'text' },
  { key: 'popupDelay',           value: '3',                  type: 'text' },
  { key: 'popupFrequency',       value: 'once-per-session',   type: 'text' },
  { key: 'popupBgImage',         value: '',                   type: 'image' },

  // Floating Bell
  { key: 'floatingBellEnabled', value: 'false',    type: 'boolean' },
  { key: 'floatingBellMessage', value: '',         type: 'text' },
  { key: 'floatingBellLink',    value: '',         type: 'text' },
  { key: 'floatingBellIcon',    value: 'Bell',     type: 'text' },
  { key: 'floatingBellColor',   value: '#6366f1',  type: 'color' },

  // Announcement Bar
  { key: 'alertBarEnabled',     value: 'false',  type: 'boolean' },
  { key: 'alertBarMessage',     value: '',       type: 'text' },
  { key: 'alertBarType',        value: 'info',   type: 'text' },
  { key: 'alertBarLink',        value: '',       type: 'text' },
  { key: 'alertBarBgColor',     value: '',       type: 'color' },
  { key: 'alertBarTextColor',   value: '',       type: 'color' },
  { key: 'alertBarDismissible', value: 'true',   type: 'boolean' },

  // SEO / OG
  { key: 'ogImageUrl',  value: '', type: 'image' },
  { key: 'metaKeywords', value: '', type: 'text' },

  // Color Theme
  { key: 'colorPrimary',    value: '#7c3aed', type: 'color' },
  { key: 'colorAccent',     value: '#0ea5e9', type: 'color' },
  { key: 'colorBackground', value: '#04060f', type: 'color' },
  { key: 'colorForeground', value: '#e8eaf6', type: 'color' },
  { key: 'colorCard',       value: '#0d1117', type: 'color' },
];

@Injectable()
export class SettingsService {
  constructor(private settingRepository: SettingRepository) {}

  async create(createSettingDto: any) {
    return this.settingRepository.create(createSettingDto);
  }

  async findAll(skip: number = 0, take: number = 100) {
    return this.settingRepository.findAll(skip, take);
  }

  async findByKey(key: string) {
    const setting = await this.settingRepository.findByKey(key);
    if (!setting) {
      throw new NotFoundException(`Setting with key ${key} not found`);
    }
    return setting;
  }

  async update(key: string, updateSettingDto: any) {
    const setting = await this.settingRepository.findByKey(key);
    if (!setting) {
      throw new NotFoundException(`Setting with key ${key} not found`);
    }
    return this.settingRepository.update(key, updateSettingDto);
  }

  async upsert(key: string, updateSettingDto: any) {
    return this.settingRepository.upsert(key, updateSettingDto);
  }

  async delete(key: string) {
    const setting = await this.settingRepository.findByKey(key);
    if (!setting) {
      throw new NotFoundException(`Setting with key ${key} not found`);
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
}
