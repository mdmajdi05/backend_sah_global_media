import { ContactService } from './contact.service';
import { CreateContactDto } from './dtos/contact.dto';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
    create(createContactDto: CreateContactDto): Promise<{
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
        data: {
            email: string;
            name: string;
            id: number;
            phone: string | null;
            service: string | null;
            message: string;
            isRead: boolean;
            submittedAt: Date;
        }[];
        total: number;
    }>;
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
    delete(id: number): Promise<void>;
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
}
