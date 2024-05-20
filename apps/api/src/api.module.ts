import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { DatabaseService } from './database.service';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [DatabaseService, ApiService],
})
export class ApiModule {}
