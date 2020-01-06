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
    const { displayName, providerId, photoURL, email, uid } = providerData[0];
    await newUser.set({
      uid: uid ?? '',
      displayName: displayName ?? '',
      providerId: providerId ?? '',
      photoURL: photoURL ?? '',
      email: email ?? '',
      docId: newUser.id,
      createdAt: metadata.creationTime ?? ''
    });
  });
