import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPublic(): string {
    return 'Hello this is public endpoint!';
  }

  getPrivate(): string {
    return 'Hello this is private endpoint!';
  }
}
