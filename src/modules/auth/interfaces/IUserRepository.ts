import { User } from '@prisma/client';

export interface IUserRepository {
  create(email: string, password: string, name: string): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: number): Promise<User | null>;
} 