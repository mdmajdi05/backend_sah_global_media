import { NewsletterService } from './newsletter.service';
import { SubscribeNewsletterDto } from './dtos/newsletter.dto';
export declare class NewsletterController {
    private newsletterService;
    constructor(newsletterService: NewsletterService);
    subscribe(subscribeDto: SubscribeNewsletterDto): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        data: {
            email: string;
            id: number;
            subscribedAt: Date;
        }[];
        total: number;
    }>;
    delete(id: number): Promise<void>;
}
