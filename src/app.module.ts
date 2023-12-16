import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AssetsModule } from './usecases/assets/assets.module';
import { CorsMiddleware } from './common/middlewares/cors.middleware';

@Module({
  imports: [ConfigModule.forRoot({ cache: true }), AssetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
