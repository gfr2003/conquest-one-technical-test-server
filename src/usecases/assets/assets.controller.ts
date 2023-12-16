import { AssetsService } from '../assets/assets.service';
import { HttpStatusCode } from 'axios';
import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GetAssetPriceDTO } from './assets.dto';
@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get('/price')
  public async getAssetsPrice(
    @Query() assetData: GetAssetPriceDTO,
    @Res() res: Response,
  ): Promise<void> {
    const response = await this.assetsService.getAssetByName(assetData);
    res.status(HttpStatusCode.Ok).send(response);
  }
}
