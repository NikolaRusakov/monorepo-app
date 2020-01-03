import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure
} from 'firebaseui-angular';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'mapp-auth-firebase',
  templateUrl: './auth-firebase.component.html',
  styleUrls: ['./auth-firebase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFirebaseComponent {
  @Output() loginSuccess = new EventEmitter<
    FirebaseUISignInSuccessWithAuthResult
  >();
  @Output() loginError = new EventEmitter<FirebaseUISignInFailure>();
  isBrowser;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: {} // @Inject(SharedUtilAuthService) listService: SharedUtilAuthService // private listService: SharedUtilAuthService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  onSuccessCb(userData: FirebaseUISignInSuccessWithAuthResult) {
    this.loginSuccess.emit(userData);
  }

  onErrorCb(error: FirebaseUISignInFailure) {
    this.loginError.emit(error);
  }
}
