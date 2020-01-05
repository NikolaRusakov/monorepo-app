import * as functions from 'firebase-functions';
import { firestore, auth } from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const registerUserTrigger = functions.auth
  .user()
  .onCreate(async ({ metadata, providerData }: auth.UserRecord) => {
    // admin.firestore().collection('users').add({original: original}).then(writeResult => {
    const newUser: firestore.DocumentReference = firestore()
      .collection('users')
      .doc();
    await newUser.set({
      ...providerData[0].toJSON(),
      createdAt: metadata.creationTime
    });
  });
