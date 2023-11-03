import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-credentials', 'true');
    next();
  });

  await app.listen(3000);
}
bootstrap();
