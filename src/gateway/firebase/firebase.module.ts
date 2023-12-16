import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FirebaseGateway } from './firebase.service';

@Module({
  imports: [HttpModule],
  providers: [FirebaseGateway],
  exports: [FirebaseGateway, HttpModule],
})
export class FirebaseModule {}
