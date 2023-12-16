import { ECollections } from '../../common/types/firebase';
import { FirebaseGateway } from '../firebase/firebase.service';
import { YahooHelper } from './yahoo.helper';
import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
@Injectable()
export class YahooGateway {
  constructor(
    private readonly yahooHelper: YahooHelper,
    private readonly firebaseGateway: FirebaseGateway,
  ) {}
  public async getAssetByName(name: string) {
    try {
      const assetInDatabase = await this.firebaseGateway.getItemsByParams(
        ECollections.assets,
        [{ key: 'name', type: '==', value: name }],
      );
      if (assetInDatabase.length) {
        return assetInDatabase[0];
      }
      const assetData = await this.yahooHelper.get(`finance/chart/${name}`, {
        params: {
          range: '1mo',
          interval: '1d',
        },
      });
      if (!assetData.length) {
        throw new NotFoundException(`O ativo com o nome ${name} não existe.`);
      }
      await this.firebaseGateway.saveItem(ECollections.assets, {
        ...assetData[0],
        name,
      });
      return assetData[0];
    } catch (error) {
      if (error.response.status === 404) {
        throw new NotFoundException(`O ativo ${name} não existe.`);
      }
      throw new BadGatewayException(`Não foi possivel buscar o ativo ${name}`);
    }
  }
}
