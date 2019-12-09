import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from './shared-auth-config.model';
import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure
} from 'firebaseui-angular';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilAuthService {
  // constructor(
  //   @Inject(APP_CONFIG)
  //   private config
  // ) {}

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData);
  }
}
