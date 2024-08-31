import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('Auto Mulher')
  .setDescription('Projeto com base na ODS 5 - Igualdade de gênero\n\n**Contatos:**\n- Ana Claudia Santana\n  - GitHub: [Anacss24](https://github.com/Anacss24)\n  - Email: anaclaudiasantanadev@gmail.com\n- Rafaela Atanásio\n  - GitHub: [rafaelaatanasio](https://github.com/rafaelaatanasio)\n  - Email: rah.jd@hotmail.com')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
