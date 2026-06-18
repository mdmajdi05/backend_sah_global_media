import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { BlogModule } from './modules/blog/blog.module';
import { TeamModule } from './modules/team/team.module';
import { ClientModule } from './modules/clients/clients.module';
import { PricingModule } from './modules/pricing/pricing.module';
import { CaseStudyModule } from './modules/case-studies/case-studies.module';
import { ContactModule } from './modules/contact/contact.module';
import { NewsletterModule } from './modules/newsletter/newsletter.module';
import { ServiceModule } from './modules/services/services.module';
import { SettingsModule } from './modules/settings/settings.module';
import { UserModule } from './modules/users/users.module';
import { VideoTestimonialsModule } from './modules/video-testimonials/video-testimonials.module';
import { StaticPagesModule } from './modules/static-pages/static-pages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    BlogModule,
    TeamModule,
    ClientModule,
    PricingModule,
    CaseStudyModule,
    ContactModule,
    NewsletterModule,
    ServiceModule,
    SettingsModule,
    UserModule,
    VideoTestimonialsModule,
    StaticPagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
