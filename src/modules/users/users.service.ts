import { Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(id: string): Promise<UsersDto | null> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      });
      return user;
    } catch {
      throw new Error('Erro ao buscar o usuário');
    }
  }
}
