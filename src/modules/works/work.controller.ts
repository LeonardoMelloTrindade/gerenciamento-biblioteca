import { Controller, Get, Post, Body } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorksDto } from './work.dto';

@Controller('/works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get()
  getWorks() {
    return this.workService.getWorks();
  }

  @Post()
  createWork(@Body() dto: WorksDto) {
    return this.workService.createWork(dto);
  }
}
