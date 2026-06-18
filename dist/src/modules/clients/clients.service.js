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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const client_repository_1 = require("./repositories/client.repository");
let ClientService = class ClientService {
    clientRepository;
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    async create(createClientDto) {
        return this.clientRepository.create(createClientDto);
    }
    async findAll(skip = 0, take = 10) {
        return this.clientRepository.findAll(skip, take);
    }
    async findById(id) {
        const client = await this.clientRepository.findById(id);
        if (!client) {
            throw new common_1.NotFoundException(`Client with id ${id} not found`);
        }
        return client;
    }
    async findActive(skip = 0, take = 10) {
        return this.clientRepository.findActive(skip, take);
    }
    async update(id, updateClientDto) {
        const client = await this.clientRepository.findById(id);
        if (!client) {
            throw new common_1.NotFoundException(`Client with id ${id} not found`);
        }
        return this.clientRepository.update(id, updateClientDto);
    }
    async delete(id) {
        const client = await this.clientRepository.findById(id);
        if (!client) {
            throw new common_1.NotFoundException(`Client with id ${id} not found`);
        }
        return this.clientRepository.delete(id);
    }
    async countAll() {
        return this.clientRepository.countAll();
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_repository_1.ClientRepository])
], ClientService);
//# sourceMappingURL=clients.service.js.map