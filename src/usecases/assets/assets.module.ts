import { Module } from '@nestjs/common';
import { FirebaseModule } from '../../gateway/firebase/firebase.module';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { YahooModule } from '../../gateway/yahoo/yahoo.module';

@Module({
  imports: [FirebaseModule, YahooModule],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
