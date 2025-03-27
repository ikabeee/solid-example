import { Request, Response } from 'express';
import { IAuthService } from '../interfaces/IAuthService';

export class AuthController {
  constructor(private authService: IAuthService) {}

  async register(req: Request, res: Response) {
    try {
      const { email, password, name } = req.body;
      const result = await this.authService.register(email, password, name);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      res.json(result);
    } catch (error) {
      res.status(401).json({ error: (error as Error).message });
    }
  }
} 