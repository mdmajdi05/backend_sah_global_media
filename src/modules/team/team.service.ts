import { Injectable, NotFoundException } from '@nestjs/common';
import { TeamRepository } from './repositories/team.repository';

@Injectable()
export class TeamService {
  constructor(private teamRepository: TeamRepository) {}

  async create(createTeamDto: any) {
    return this.teamRepository.create(createTeamDto);
  }

  async findAll(skip: number = 0, take: number = 10) {
    return this.teamRepository.findAll(skip, take);
  }

  async findById(id: number) {
    const team = await this.teamRepository.findById(id);
    if (!team) {
      throw new NotFoundException(`Team member with id ${id} not found`);
    }
    return team;
  }

  async findActive(skip: number = 0, take: number = 10) {
    return this.teamRepository.findActive(skip, take);
  }

  async update(id: number, updateTeamDto: any) {
    const team = await this.teamRepository.findById(id);
    if (!team) {
      throw new NotFoundException(`Team member with id ${id} not found`);
    }
    return this.teamRepository.update(id, updateTeamDto);
  }

  async delete(id: number) {
    const team = await this.teamRepository.findById(id);
    if (!team) {
      throw new NotFoundException(`Team member with id ${id} not found`);
    }
    return this.teamRepository.delete(id);
  }

  async countAll() {
    return this.teamRepository.countAll();
  }
}