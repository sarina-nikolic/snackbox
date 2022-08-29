import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SnacksModule } from './snacks/snacks.module';

async function bootstrap() {
  const app = await NestFactory.create(SnacksModule);
  const config = new DocumentBuilder()
    .setTitle('Snackbox API')
    .setDescription(
      'The Snackbox API is used for managing snacks in a snackbox',
    )
    .setVersion('1.0')
    .addTag('snacks')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
