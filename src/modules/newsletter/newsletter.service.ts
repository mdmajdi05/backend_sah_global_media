import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { SubscriberRepository } from './repositories/subscriber.repository';

@Injectable()
export class NewsletterService {
  constructor(private subscriberRepository: SubscriberRepository) {}

  async subscribe(email: string) {
    const existingSubscriber = await this.subscriberRepository.findByEmail(email);
    if (existingSubscriber) {
      throw new ConflictException('Email already subscribed');
    }
    return this.subscriberRepository.create({ email });
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.subscriberRepository.findAll(skip, take);
  }

  async findById(id: number) {
    const subscriber = await this.subscriberRepository.findById(id);
    if (!subscriber) {
      throw new NotFoundException(`Subscriber with id ${id} not found`);
    }
    return subscriber;
  }

  async update(id: number, updateSubscriberDto: any) {
    const subscriber = await this.subscriberRepository.findById(id);
    if (!subscriber) {
      throw new NotFoundException(`Subscriber with id ${id} not found`);
    }
    return this.subscriberRepository.update(id, updateSubscriberDto);
  }

  async delete(id: number) {
    const subscriber = await this.subscriberRepository.findById(id);
    if (!subscriber) {
      throw new NotFoundException(`Subscriber with id ${id} not found`);
    }
    return this.subscriberRepository.delete(id);
  }

  async countAll() {
    return this.subscriberRepository.countAll();
  }
}