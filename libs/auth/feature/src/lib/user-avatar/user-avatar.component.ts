import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthFacade } from '@fapp/auth/domain';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'fapp-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAvatarComponent {
  user$ = this.userFacade.loggedUser$.pipe(tap(console.log));

  constructor(private userFacade: AuthFacade) {}

  logoutUser() {
    this.userFacade.logoutUser();
  }
}
