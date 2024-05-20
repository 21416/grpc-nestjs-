import { Injectable } from '@nestjs/common';
import { Empty, Logs, MessageLogResponse, TakesReq } from 'proto/sample';
import { ReturnRes } from 'proto/sample';
import { DatabaseService } from './database.service';
import axios from 'axios';
@Injectable()
export class ApiService {
  constructor(private readonly dbService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }
  async sendSample(takesReq: TakesReq): Promise<ReturnRes> {
    return { id: 1 };
  }
  async mongoDbData(empty: Empty): Promise<MessageLogResponse> {
    const { data } = await axios.get<any>('http://localhost:1337/messageLogs');

    console.log({ data });
    return {
      messageLogs: data,
    };
  }
}
