import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { WorksDto } from './work.dto';

@Injectable()
export class WorkService {
  constructor(private prisma: PrismaService) {}

  async getWorks(): Promise<WorksDto[]> {
    const works: WorksDto[] = await this.prisma.work.findMany();
    return works;
  }

  async createWork(dto: WorksDto): Promise<WorksDto> {
    const work = await this.prisma.work.create({
      data: dto,
    });
    return work;
  }
}
