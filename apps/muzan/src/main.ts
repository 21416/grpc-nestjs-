import { NestFactory } from '@nestjs/core';
import { MuzanModule } from './muzan.module';

async function bootstrap() {
  const app = await NestFactory.create(MuzanModule);
  await app.listen(3000);
}
bootstrap();
