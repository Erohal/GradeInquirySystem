import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/filters/all-exception.filter';
import { MessageInterceptor } from './common/interceptors/message.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));
  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalInterceptors(new MessageInterceptor())
  await app.listen(3000);
}
bootstrap();
