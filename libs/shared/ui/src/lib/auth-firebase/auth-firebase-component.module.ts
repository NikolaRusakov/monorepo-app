import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFirebaseComponent } from './auth-firebase.component';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import firebase from 'firebase/app';
// import 'firebase/auth'
// import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
// import firebase  from 'firebase/app';

console.log(firebase.auth);
const firebaseUiAuthConf: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
      customParameters: {
        auth_type: 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};
@NgModule({
  declarations: [AuthFirebaseComponent],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConf)
  ],
  exports: [AuthFirebaseComponent]
})
export class AuthFirebaseComponentModule {}
