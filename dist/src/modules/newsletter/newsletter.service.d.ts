import { SubscriberRepository } from './repositories/subscriber.repository';
export declare class NewsletterService {
    private subscriberRepository;
    constructor(subscriberRepository: SubscriberRepository);
    subscribe(email: string): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    }[]>;
    findById(id: number): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    }>;
    update(id: number, updateSubscriberDto: any): Promise<{
        email: string;
        id: number;
        subscribedAt: Date;
    }>;
    delete(id: number): Promise<void>;
    countAll(): Promise<number>;
}
