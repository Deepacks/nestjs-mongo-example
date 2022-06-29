import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { secrets } from 'docker-secret';

import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

const isDev = process.env.NODE_ENV === 'dev';

const configModule = isDev
  ? [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: `${process.env.NODE_ENV}.env`,
      }),
    ]
  : [];

console.log(secrets.P_MONGO_USER);
@Module({
  imports: [
    ...configModule,
    MongooseModule.forRoot(
      `mongodb://${
        isDev ? 'localhost' : secrets.P_MONGO_HOST
      }:27017/streakcloud-p`,
      {
        authSource: 'streakcloud-p',
        user: isDev ? process.env.MONGO_USER : secrets.P_MONGO_USER,
        pass: isDev ? process.env.MONGO_PASS : secrets.P_MONGO_PASS,
      },
    ),
    CatsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
