import { FirebaseGateway } from 'src/gateway/firebase/firebase.service';
import { YahooGateway } from '../../gateway/yahoo/yahoo.service';
import { GetAssetPriceDTO } from './assets.dto';
import { Injectable } from '@nestjs/common';
import { ECollections } from 'src/common/types/firebase';
@Injectable()
export class AssetsService {
  constructor(
    private readonly yahooGateway: YahooGateway,
    private readonly firebaseGateway: FirebaseGateway,
  ) {}

  public async getAssetByName(assetData: GetAssetPriceDTO) {
    return await this.yahooGateway.getAssetByName(assetData.name);
  }
  public async getAssets() {
    return await this.firebaseGateway.getItems(ECollections.assets);
  }
}
