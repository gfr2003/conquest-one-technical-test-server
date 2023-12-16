import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { YahooGateway } from './yahoo.service';
import { YahooHelper } from './yahoo.helper';
import { FirebaseGateway } from '../firebase/firebase.service';

@Module({
  imports: [HttpModule],
  providers: [YahooGateway, YahooHelper, FirebaseGateway],
  exports: [HttpModule, YahooGateway],
})
export class YahooModule {}
