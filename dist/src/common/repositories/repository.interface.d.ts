export interface IRepository<T> {
    create(data: any): Promise<T>;
    findAll(skip?: number, take?: number): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    update(id: number, data: any): Promise<T>;
    delete(id: number): Promise<void>;
}
