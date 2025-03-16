import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { WorkService } from './work.service';
import { WorksDto } from './work.dto';

@Controller('works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get(':id')
  getWork(@Param('id') id: string) {
    return this.workService.getWork(id);
  }
  @Get()
  getWorks() {
    return this.workService.getWorks();
  }

  @Post()
  createWork(@Body() dto: WorksDto) {
    return this.workService.createWork(dto);
  }

  @Put()
  updateWork(@Query('id') id: string, @Body() dto: WorksDto) {
    return this.workService.updateWork(id, dto);
  }

  @Delete()
  deleteWork(@Query('id') id: string) {
    return this.workService.deleteWork(id);
  }
}
