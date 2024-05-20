import { Module } from '@nestjs/common';
import { MuzanController } from './muzan.controller';
import { MuzanService } from './muzan.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'sample',
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../../../proto/sample.proto'),
          package: 'sample',
        },
      },
    ]),
  ],
  controllers: [MuzanController],
  providers: [MuzanService],
})
export class MuzanModule {}
