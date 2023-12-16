import { YahooGateway } from '../../gateway/yahoo/yahoo.service';
import { GetAssetPriceDTO } from './assets.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AssetsService {
  constructor(private readonly yahooGateway: YahooGateway) {}

  public async getAssetByName(assetData: GetAssetPriceDTO) {
    return await this.yahooGateway.getAssetByName(assetData.name);
  }
}
