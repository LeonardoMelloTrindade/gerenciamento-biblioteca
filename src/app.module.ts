import { Module } from '@nestjs/common';
import { WorkModule } from './modules/works/work.module';

@Module({
  imports: [WorkModule],
})
export class AppModule {}
