import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true, credentials: true });
  app.setGlobalPrefix('admin');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      rolling: true,
      proxy: true,
      cookie: {
        maxAge: 1000 * 60 * 15,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        httpOnly: true,
        sameSite: 'none',
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Lighty Admin')
    .setDescription('어드민...')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('admin/api', app, documentFactory);

  await app.listen(4000);
}
bootstrap();
