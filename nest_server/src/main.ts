import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {abortOnError: false});
  // const app = await NestFactory.create<NestExpressApplication>(AppModule); This exposes the express methods 
  await app.listen(3000);
}
bootstrap();
