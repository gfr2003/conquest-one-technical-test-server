import { Injectable, BadGatewayException } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import {
  ECollections,
  FirebaseItem,
  FirebaseWhere,
} from 'src/common/types/firebase';
@Injectable()
export class FirebaseGateway {
  constructor() {}

  public async saveItem<T extends Partial<Record<keyof T, unknown>>>(
    collection: ECollections,
    item: T,
    id?: string,
    merge = false,
  ): Promise<void> {
    try {
      if (id) {
        await firestore().collection(collection).doc(id).set(item, { merge });
        return;
      }
      await firestore().collection(collection).doc().set(item, { merge });
    } catch (error) {
      throw new BadGatewayException(
        `Erro ao salvar documento ${id ?? ''} no banco de dados`,
      );
    }
  }

  public async getItemsByParams<T>(
    collection: ECollections,
    params: FirebaseWhere[],
  ): Promise<Array<FirebaseItem<T>>> {
    try {
      const query = params.reduce(
        (acc, param) => acc.where(param.key, param.type, param.value),
        firestore().collection(collection),
      );
      const result = await query.get();
      return result.docs.map((doc) => doc.data() as FirebaseItem<T>);
    } catch (err) {
      throw new BadGatewayException(`Erro ao buscar documentos no firebase`);
    }
  }
}
