import { ContactRepository } from './repositories/contact.repository';
export declare class ContactService {
    private contactRepository;
    constructor(contactRepository: ContactRepository);
    create(createContactDto: any): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }[]>;
    findById(id: number): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }>;
    update(id: number, updateContactDto: any): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }>;
    delete(id: number): Promise<void>;
    markAsRead(id: number): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }>;
    findUnread(): Promise<{
        email: string;
        name: string;
        id: number;
        phone: string | null;
        service: string | null;
        message: string;
        isRead: boolean;
        submittedAt: Date;
    }[]>;
    countAll(): Promise<number>;
}
