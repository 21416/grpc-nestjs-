import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  Empty,
  SAMPLE_SERVICE_NAME,
  SampleServiceClient,
  TakesReq,
} from 'proto/sample';

@Injectable()
export class MuzanService implements OnModuleInit {
  private sampleServiceClient: SampleServiceClient;

  constructor(@Inject('sample') private clientGrpc: ClientGrpc) {}
  onModuleInit() {
    this.sampleServiceClient =
      this.clientGrpc.getService<SampleServiceClient>(SAMPLE_SERVICE_NAME);
  }
  sendSample(takesReq: TakesReq) {
    //console.log(JSON.stringify(this.sampleServiceClient));
    const val = this.sampleServiceClient.sendSample(takesReq);
    return val;
  }
  MondoDbLogs(empty: Empty) {
    const logs = this.sampleServiceClient.mongoDbData(empty);
    return logs;
  }
}
