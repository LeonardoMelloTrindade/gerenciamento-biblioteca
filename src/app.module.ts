import { Module } from '@nestjs/common';
import { WorkModule } from './modules/works/work.module';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';

@Module({
  imports: [WorkModule, PrismaModule, AuthModule, UsersModule],
  providers: [UsersService],
})
export class AppModule {}
