import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AssetsModule } from './usecases/assets/assets.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true }), AssetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
