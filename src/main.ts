import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: ['http://localhost:5173', 'http://localhost:3000'] },
  });
  await app.listen(process.env.PORT ?? 8080);
}
void bootstrap();
