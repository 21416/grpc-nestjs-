import { Body, Controller, Get } from '@nestjs/common';
import { MuzanService } from './muzan.service';
import { Empty } from 'proto/sample';

@Controller()
export class MuzanController {
  constructor(private readonly muzanService: MuzanService) {}

  @Get()
  async getHello(@Body() empty: Empty) {
    // return this.muzanService.getHello();
    // return 'hello muzan';
    const logs = this.muzanService.MondoDbLogs(empty);
    return logs;
  }
}
