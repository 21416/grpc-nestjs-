import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ApiModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../../../proto/sample.proto'),
        package: 'sample',
        url: '0.0.0.0:5000',
      },
    },
  );
  await app.listen();
}
bootstrap();
