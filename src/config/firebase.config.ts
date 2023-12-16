import admin from 'firebase-admin';

export function initializeFirebase(): void {
  const serviceAccount = JSON.parse(process.env.FIREBASE!);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}
