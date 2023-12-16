import { firestore } from 'firebase-admin';

export enum ECollections {
  'assets' = 'assets',
}

export interface FirebaseWhere {
  readonly key: string;
  readonly type: firestore.WhereFilterOp;
  readonly value: any;
}

export type FirebaseItem<T> = {
  [K in keyof T]: T[K] extends Date ? firestore.Timestamp : T[K];
};
