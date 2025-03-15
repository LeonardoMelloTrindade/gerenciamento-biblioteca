import { Module } from '@nestjs/common';
import { WorkModule } from './modules/works/work.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [WorkModule, PrismaModule],
})
export class AppModule {}
