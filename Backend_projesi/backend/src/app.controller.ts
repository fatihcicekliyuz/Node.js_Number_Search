import { Controller, Dependencies, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('/numberSearch')
@Dependencies(AppService)
export class AppController {
  private readonly service = new AppService();
  constructor(service) {
    this.service = service;
  }
  @Get(':number')
  async control(@Param() params): Promise<any> {
    const a = await this.service.control(params?.number);
    return a;
  }
}
