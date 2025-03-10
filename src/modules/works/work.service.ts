import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkService {
  getWorks(): string {
    return 'Hello Works!';
  }
}
