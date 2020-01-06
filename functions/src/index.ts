import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
admin.initializeApp();

export * from './register-user-trigger';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.send('Hello from Firebase!');
// });
