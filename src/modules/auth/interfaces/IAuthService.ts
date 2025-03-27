import { User } from '@prisma/client';

export interface IAuthService {
  register(email: string, password: string, name: string): Promise<{ user: User; token: string }>;
  login(email: string, password: string): Promise<{ user: User; token: string }>;
} 