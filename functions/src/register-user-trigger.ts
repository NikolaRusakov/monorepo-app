import * as functions from 'firebase-functions';
import { firestore, auth } from 'firebase-admin';

export const registerUserTrigger = functions.auth
  .user()
  .onCreate(async ({ metadata, providerData, uid }: auth.UserRecord) => {
    // admin.firestore().collection('users').add({original: original}).then(writeResult => {
    const newUser: firestore.DocumentReference = firestore()
      .collection('users')
      .doc(uid);
    const { displayName, providerId, photoURL, email } = providerData[0];
    await newUser.set({
      uid: uid ?? '',
      docId: newUser.id,
      displayName: displayName ?? '',
      providerId: providerId ?? '',
      photoURL: photoURL ?? '',
      email: email ?? '',
      createdAt: metadata.creationTime ?? '',
      updatedAt: metadata.creationTime ?? ''
    });
  });
