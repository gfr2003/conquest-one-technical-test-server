import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeFirebase } from './config/firebase.config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
initializeFirebase();
bootstrap();
