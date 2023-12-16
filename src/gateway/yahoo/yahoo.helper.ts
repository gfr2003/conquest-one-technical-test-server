import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { lastValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
@Injectable()
export class YahooHelper {
  constructor(private readonly http: HttpService) {}

  public get = async (url: string, customOptions?: AxiosRequestConfig) => {
    const result = await lastValueFrom(
      this.http.get<any>(`${process.env.YAHOO_BASE_URL}/${url}`, {
        ...customOptions,
      }),
    );
    return result.data.chart.result;
  };
}
