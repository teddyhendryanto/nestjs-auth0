import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthzGuard } from './authz/authz.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('public')
  getPublic(): string {
    return this.appService.getPublic();
  }

  @Post('private')
  @UseGuards(AuthzGuard)
  getPrivate(): string {
    return this.appService.getPrivate();
  }
}
