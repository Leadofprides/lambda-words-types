import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors();

  await app.init();

  app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-credentials', 'true');
    next();
  });

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
