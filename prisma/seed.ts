import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.subService.deleteMany();
  await prisma.serviceCategory.deleteMany();
  await prisma.websiteSetting.deleteMany();
  await prisma.adminUser.deleteMany();

  // Create superadmin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Admin@2026', 10);
  const adminUser = await prisma.adminUser.create({
    data: {
      email: process.env.ADMIN_EMAIL || 'admin@sahglobalmedia.com',
      password: hashedPassword,
      name: 'Super Admin',
      role: 'superadmin',
    },
  });
  console.log('✅ Created superadmin user');

  // Create service categories with sub-services
  const categories = [
    {
      name: 'Digital Marketing',
      icon: 'BarChart3',
      order: 0,
      subServices: [
        {
          name: 'Social Media Marketing',
          description: 'Comprehensive social media strategies',
          features: ['Instagram Marketing', 'Facebook Marketing', 'LinkedIn Marketing', 'TikTok Marketing', 'Twitter Marketing'],
          icon: 'Share2',
          order: 0,
        },
        {
          name: 'Performance Marketing',
          description: 'Results-driven advertising campaigns',
          features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Conversion Optimization', 'ROI Tracking'],
          icon: 'TrendingUp',
          order: 1,
        },
        {
          name: 'SEO Services',
          description: 'Search engine optimization expertise',
          features: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'Keyword Research', 'Link Building'],
          icon: 'Search',
          order: 2,
        },
        {
          name: 'Branding',
          description: 'Build your brand identity',
          features: ['Logo Design', 'Brand Strategy', 'Brand Guidelines', 'Visual Identity', 'Brand Messaging'],
          icon: 'Palette',
          order: 3,
        },
        {
          name: 'Content Marketing',
          description: 'Engaging content creation',
          features: ['Blog Writing', 'Copywriting', 'Whitepapers', 'Case Studies', 'Content Strategy'],
          icon: 'FileText',
          order: 4,
        },
      ],
    },
    {
      name: 'Video Production',
      icon: 'Video',
      order: 1,
      subServices: [
        {
          name: 'UGC Videos',
          description: 'User-generated content production',
          features: ['UGC Scripting', 'UGC Filming', 'UGC Editing', 'Multi-Format UGC'],
          icon: 'Camera',
          order: 0,
        },
        {
          name: 'Brand Videos',
          description: 'Professional brand storytelling',
          features: ['Brand Films', 'Company Videos', 'Testimonial Videos', 'Brand Stories'],
          icon: 'Clapperboard',
          order: 1,
        },
        {
          name: 'Product Videos',
          description: 'Showcase your products',
          features: ['Product Demos', 'Product Explainers', '360° Product Videos', 'Unboxing Videos'],
          icon: 'Package',
          order: 2,
        },
        {
          name: 'Short Form Videos',
          description: 'Viral short-form content',
          features: ['Instagram Reels', 'TikTok Videos', 'YouTube Shorts', 'Trending Formats'],
          icon: 'Zap',
          order: 3,
        },
        {
          name: 'Commercial Production',
          description: 'Professional commercials',
          features: ['30-sec Commercials', '60-sec Commercials', 'Full-length Ads', 'Broadcast Quality'],
          icon: 'Film',
          order: 4,
        },
        {
          name: 'Post Production',
          description: 'Video editing and effects',
          features: ['Video Editing', 'Color Grading', 'VFX & Animation', 'Sound Design', 'Motion Graphics'],
          icon: 'Layers',
          order: 5,
        },
      ],
    },
    {
      name: 'High-Ticket Services',
      icon: 'Crown',
      order: 2,
      subServices: [
        {
          name: 'Personal Branding',
          description: 'Build your personal brand',
          features: ['Personal Brand Strategy', 'LinkedIn Optimization', 'Personal Website', 'Media Kit Creation'],
          icon: 'User',
          order: 0,
        },
        {
          name: 'CEO Content',
          description: 'Executive thought leadership',
          features: ['CEO Branding', 'Executive Positioning', 'Speaking Engagements', 'Podcast Appearances'],
          icon: 'Briefcase',
          order: 1,
        },
        {
          name: 'Retainers',
          description: 'Ongoing managed services',
          features: ['Monthly Marketing', 'Dedicated Team', 'Continuous Optimization', '24/7 Support'],
          icon: 'Clock',
          order: 2,
        },
        {
          name: 'Funnels',
          description: 'Sales funnel optimization',
          features: ['Funnel Design', 'Conversion Optimization', 'Landing Pages', 'Sales Sequences'],
          icon: 'Funnel',
          order: 3,
        },
        {
          name: 'Lead Generation',
          description: 'Generate qualified leads',
          features: ['Lead Magnet Creation', 'Lead Nurturing', 'Lead Scoring', 'Pipeline Management'],
          icon: 'Users',
          order: 4,
        },
        {
          name: 'E-commerce Growth',
          description: 'Scale your online store',
          features: ['Store Optimization', 'Product Launch', 'Conversion Rate Optimization', 'Customer Retention'],
          icon: 'ShoppingCart',
          order: 5,
        },
        {
          name: 'Influencer Marketing',
          description: 'Partner with influencers',
          features: ['Influencer Matching', 'Campaign Management', 'Negotiation & Contracts', 'Performance Tracking'],
          icon: 'Star',
          order: 6,
        },
        {
          name: 'Podcast Management',
          description: 'Launch and grow your podcast',
          features: ['Podcast Strategy', 'Production Setup', 'Episode Management', 'Distribution & Promotion'],
          icon: 'Headphones',
          order: 7,
        },
        {
          name: 'YouTube Management',
          description: 'Channel growth and optimization',
          features: ['Channel Setup', 'Video Strategy', 'SEO Optimization', 'Subscriber Growth'],
          icon: 'Play',
          order: 8,
        },
      ],
    },
    {
      name: 'Growth Solutions',
      icon: 'Rocket',
      order: 3,
      subServices: [
        {
          name: 'Personal Branding',
          description: 'Build your personal brand',
          features: ['Brand Positioning', 'Social Proof Building', 'Authority Development', 'Networking Strategy'],
          icon: 'User',
          order: 0,
        },
        {
          name: 'Influencer Marketing',
          description: 'Leverage influencer partnerships',
          features: ['Influencer Database', 'Partnership Negotiation', 'Campaign Execution', 'ROI Tracking'],
          icon: 'Star',
          order: 1,
        },
        {
          name: 'YouTube Management',
          description: 'Grow on YouTube',
          features: ['Channel Optimization', 'Content Strategy', 'Thumbnail Design', 'SEO & Keywords'],
          icon: 'Play',
          order: 2,
        },
        {
          name: 'E-commerce Marketing',
          description: 'E-commerce sales growth',
          features: ['Product Marketing', 'Marketplace Optimization', 'Customer Acquisition', 'Retention Strategy'],
          icon: 'ShoppingCart',
          order: 3,
        },
        {
          name: 'Strategy & Consulting',
          description: 'Business growth strategy',
          features: ['Market Analysis', 'Competitor Research', 'Growth Roadmap', 'Implementation Support'],
          icon: 'Compass',
          order: 4,
        },
      ],
    },
    {
      name: 'Development & IT Services',
      icon: 'Code',
      order: 4,
      subServices: [
        {
          name: 'Website Development',
          description: 'Custom website solutions',
          features: ['React.js Websites', 'Next.js Websites', 'WordPress Development', 'Custom CMS', 'E-commerce Websites', 'Landing Page Development', 'Website Maintenance'],
          icon: 'Globe',
          order: 0,
        },
        {
          name: 'App Development',
          description: 'Mobile and web applications',
          features: ['React Native Apps', 'Flutter Apps', 'iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Store Optimization', 'App Maintenance'],
          icon: 'Smartphone',
          order: 1,
        },
        {
          name: 'Dashboard & Admin Panel Development',
          description: 'Custom admin solutions',
          features: ['Custom Admin Panels', 'Analytics Dashboards', 'Real-time Dashboards', 'Reporting Dashboards', 'API Integration Dashboards', 'SaaS Dashboards'],
          icon: 'BarChart3',
          order: 2,
        },
        {
          name: 'ERP Solutions',
          description: 'Enterprise resource planning',
          features: ['Odoo ERP Implementation', 'Zoho ERP Integration', 'Custom ERP Development', 'Inventory Management', 'HRM Systems', 'Accounting Modules', 'Supply Chain Solutions'],
          icon: 'Database',
          order: 3,
        },
        {
          name: 'CRM Integration',
          description: 'Customer relationship management',
          features: ['Salesforce Integration', 'HubSpot CRM Setup', 'Custom CRM Development', 'Lead Management Systems', 'Pipeline Automation'],
          icon: 'Users',
          order: 4,
        },
      ],
    },
  ];

  for (const cat of categories) {
    const category = await prisma.serviceCategory.create({
      data: {
        name: cat.name,
        icon: cat.icon,
        order: cat.order,
        isActive: true,
      },
    });

    for (const subSvc of cat.subServices) {
      await prisma.subService.create({
        data: {
          name: subSvc.name,
          description: subSvc.description,
          features: subSvc.features,
          icon: subSvc.icon,
          order: subSvc.order,
          isActive: true,
          serviceCategoryId: category.id,
        },
      });
    }
  }

  console.log('✅ Created service categories with sub-services');

  // Create default website settings
  const settings = [
    // Site Identity
    { key: 'siteName', value: 'Sah Global Media', type: 'text' },
    { key: 'logoUrl', value: '', type: 'image' },
    { key: 'favicon', value: '', type: 'image' },
    { key: 'developedBy', value: 'Sah Global Media', type: 'text' },

    // Hero Section
    { key: 'heroHeading', value: 'Transform Your Digital Presence', type: 'text' },
    { key: 'heroSubheading', value: 'Expert digital marketing, video production, and web development services that drive real results.', type: 'text' },
    { key: 'heroCta', value: 'Get Started', type: 'text' },
    { key: 'heroCtaLink', value: '/contact', type: 'text' },
    { key: 'heroImageUrl', value: '', type: 'image' },
    { key: 'heroVideoUrl', value: '', type: 'text' },

    // Contact Info
    { key: 'contactEmail', value: 'contact@sahglobalmedia.com', type: 'text' },
    { key: 'contactPhone', value: '+1 (555) 123-4567', type: 'text' },
    { key: 'address', value: '123 Business Street, New York, NY 10001', type: 'text' },
    { key: 'mapEmbedUrl', value: '', type: 'text' },

    // Social Links
    { key: 'facebookUrl', value: 'https://facebook.com/sahglobalmedia', type: 'text' },
    { key: 'instagramUrl', value: 'https://instagram.com/sahglobalmedia', type: 'text' },
    { key: 'linkedinUrl', value: 'https://linkedin.com/company/sahglobalmedia', type: 'text' },
    { key: 'twitterUrl', value: 'https://twitter.com/sahglobalmedia', type: 'text' },
    { key: 'youtubeUrl', value: 'https://youtube.com/@sahglobalmedia', type: 'text' },
    { key: 'footerText', value: '© 2026 Sah Global Media. All rights reserved.', type: 'text' },

    // WhatsApp Widget
    { key: 'whatsappEnabled', value: 'true', type: 'boolean' },
    { key: 'whatsappNumber', value: '+15551234567', type: 'text' },
    { key: 'whatsappMessage', value: 'Hi! I am interested in your services.', type: 'text' },
    { key: 'whatsappPosition', value: 'bottom-right', type: 'text' },

    // Popup Offer
    { key: 'popupEnabled', value: 'false', type: 'boolean' },
    { key: 'popupOfferText', value: 'Get 20% off your first project!', type: 'text' },
    { key: 'popupOfferButtonText', value: 'Claim Offer', type: 'text' },
    { key: 'popupButtonLink', value: '/contact', type: 'text' },
    { key: 'popupDelay', value: '3', type: 'text' },
    { key: 'popupFrequency', value: 'once-per-session', type: 'text' },
    { key: 'popupBgImage', value: '', type: 'image' },

    // Floating Bell
    { key: 'floatingBellEnabled', value: 'false', type: 'boolean' },
    { key: 'floatingBellMessage', value: 'Need help? Chat with us!', type: 'text' },
    { key: 'floatingBellLink', value: '', type: 'text' },
    { key: 'floatingBellIcon', value: 'Bell', type: 'text' },
    { key: 'floatingBellColor', value: '#6366f1', type: 'color' },

    // Alert / Announcement Bar
    { key: 'alertBarEnabled', value: 'false', type: 'boolean' },
    { key: 'alertBarMessage', value: '🚀 Special offer: Get 20% off all services this month!', type: 'text' },
    { key: 'alertBarType', value: 'info', type: 'text' },
    { key: 'alertBarLink', value: '', type: 'text' },
    { key: 'alertBarBgColor', value: '#6366f1', type: 'color' },
    { key: 'alertBarTextColor', value: '#ffffff', type: 'color' },
    { key: 'alertBarDismissible', value: 'true', type: 'boolean' },
  ];

  for (const setting of settings) {
    await prisma.websiteSetting.create({
      data: setting,
    });
  }

  console.log('✅ Created website settings');
  console.log('🎉 Seeding completed successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });