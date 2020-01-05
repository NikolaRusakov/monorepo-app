import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FirebaseUISignInSuccessWithAuthResult,
  FirebaseUISignInFailure
} from 'firebaseui-angular';

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
  constructor() // @Inject(SharedUtilAuthService) listService: SharedUtilAuthService
  // private listService: SharedUtilAuthService
  {}

  onSuccessCb(userData: FirebaseUISignInSuccessWithAuthResult) {
    this.loginSuccess.emit(userData);
  }

  onErrorCb(error: FirebaseUISignInFailure) {
    this.loginError.emit(error);
  }
}
