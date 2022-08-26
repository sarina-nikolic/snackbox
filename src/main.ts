import { NestFactory } from '@nestjs/core';
import { SnacksModule } from './snacks/snacks.module';

async function bootstrap() {
  const app = await NestFactory.create(SnacksModule);
  await app.listen(3000);
}
bootstrap();
