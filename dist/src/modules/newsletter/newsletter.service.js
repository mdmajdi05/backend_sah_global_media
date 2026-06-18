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
exports.NewsletterService = void 0;
const common_1 = require("@nestjs/common");
const subscriber_repository_1 = require("./repositories/subscriber.repository");
let NewsletterService = class NewsletterService {
    subscriberRepository;
    constructor(subscriberRepository) {
        this.subscriberRepository = subscriberRepository;
    }
    async subscribe(email) {
        const existingSubscriber = await this.subscriberRepository.findByEmail(email);
        if (existingSubscriber) {
            throw new common_1.ConflictException('Email already subscribed');
        }
        return this.subscriberRepository.create({ email });
    }
    async findAll(skip = 0, take = 10) {
        return this.subscriberRepository.findAll(skip, take);
    }
    async findById(id) {
        const subscriber = await this.subscriberRepository.findById(id);
        if (!subscriber) {
            throw new common_1.NotFoundException(`Subscriber with id ${id} not found`);
        }
        return subscriber;
    }
    async update(id, updateSubscriberDto) {
        const subscriber = await this.subscriberRepository.findById(id);
        if (!subscriber) {
            throw new common_1.NotFoundException(`Subscriber with id ${id} not found`);
        }
        return this.subscriberRepository.update(id, updateSubscriberDto);
    }
    async delete(id) {
        const subscriber = await this.subscriberRepository.findById(id);
        if (!subscriber) {
            throw new common_1.NotFoundException(`Subscriber with id ${id} not found`);
        }
        return this.subscriberRepository.delete(id);
    }
    async countAll() {
        return this.subscriberRepository.countAll();
    }
};
exports.NewsletterService = NewsletterService;
exports.NewsletterService = NewsletterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [subscriber_repository_1.SubscriberRepository])
], NewsletterService);
//# sourceMappingURL=newsletter.service.js.map