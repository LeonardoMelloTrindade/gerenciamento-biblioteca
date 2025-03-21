import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { WorksDto } from './work.dto';

@Injectable()
export class WorkService {
  constructor(private prisma: PrismaService) {}

  async getWorks(): Promise<WorksDto[]> {
    try {
      const works: WorksDto[] = await this.prisma.work.findMany();
      return works;
    } catch {
      throw new Error('Erro ao buscar as obras literárias');
    }
  }

  async getWork(id: string): Promise<WorksDto | null> {
    try {
      const work = await this.prisma.work.findUnique({
        where: { id },
      });
      return work;
    } catch {
      throw new Error('Erro ao buscar a obra literária');
    }
  }

  async createWork(dto: WorksDto): Promise<WorksDto> {
    try {
      const work = await this.prisma.work.create({
        data: dto,
      });
      return work;
    } catch {
      throw new Error('Erro ao criar a obra literária');
    }
  }

  async updateWork(id: string, dto: WorksDto): Promise<WorksDto> {
    try {
      const work = await this.prisma.work.update({
        where: { id },
        data: dto,
      });
      return work;
    } catch {
      throw new Error('Erro ao atualizar a obra literária');
    }
  }

  async deleteWork(id: string): Promise<WorksDto> {
    try {
      const work = await this.prisma.work.delete({
        where: { id },
      });
      return work;
    } catch {
      throw new Error('Erro ao deletar a obra literária');
    }
  }
}
