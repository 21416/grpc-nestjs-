import { Controller } from '@nestjs/common';
import { ApiService } from './api.service';
// import { GrpcMethod } from '@nestjs/microservices';
import {
  Empty,
  // Logs,
  MessageLogResponse,
  SampleServiceControllerMethods,
  TakesReq,
} from '../../../proto/sample';
import { SampleServiceController } from '../../../proto/sample';
// import { Observable } from 'rxjs';

@Controller()
@SampleServiceControllerMethods()
export class ApiController implements SampleServiceController {
  constructor(private readonly apiService: ApiService) {}

  sendSample(takesReq: TakesReq) {
    return this.apiService.sendSample(takesReq);
  }
  mongoDbData(empty: Empty): Promise<MessageLogResponse> {
    return this.apiService.mongoDbData(empty);
  }
}
