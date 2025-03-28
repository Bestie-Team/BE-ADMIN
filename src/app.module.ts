import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestSessionOptions, SessionModule } from 'nestjs-session';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/modules/users.module';
import { AuthModule } from 'src/modules/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SessionModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        config: ConfigService,
      ): Promise<NestSessionOptions> => {
        return {
          session: {
            secret: config.get<string>('SESSION_SECRET'),
            resave: false,
            saveUninitialized: false,
            rolling: true,
            cookie: {
              maxAge: 1000 * 60 * 5,
              secure: process.env.NODE_ENV === 'production' ? true : false,
              httpOnly: true,
            },
          },
        };
      },
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
