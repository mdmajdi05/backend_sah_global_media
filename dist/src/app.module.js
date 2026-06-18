"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const auth_module_1 = require("./modules/auth/auth.module");
const blog_module_1 = require("./modules/blog/blog.module");
const team_module_1 = require("./modules/team/team.module");
const clients_module_1 = require("./modules/clients/clients.module");
const pricing_module_1 = require("./modules/pricing/pricing.module");
const case_studies_module_1 = require("./modules/case-studies/case-studies.module");
const contact_module_1 = require("./modules/contact/contact.module");
const newsletter_module_1 = require("./modules/newsletter/newsletter.module");
const services_module_1 = require("./modules/services/services.module");
const settings_module_1 = require("./modules/settings/settings.module");
const users_module_1 = require("./modules/users/users.module");
const video_testimonials_module_1 = require("./modules/video-testimonials/video-testimonials.module");
const static_pages_module_1 = require("./modules/static-pages/static-pages.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            auth_module_1.AuthModule,
            blog_module_1.BlogModule,
            team_module_1.TeamModule,
            clients_module_1.ClientModule,
            pricing_module_1.PricingModule,
            case_studies_module_1.CaseStudyModule,
            contact_module_1.ContactModule,
            newsletter_module_1.NewsletterModule,
            services_module_1.ServiceModule,
            settings_module_1.SettingsModule,
            users_module_1.UserModule,
            video_testimonials_module_1.VideoTestimonialsModule,
            static_pages_module_1.StaticPagesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map