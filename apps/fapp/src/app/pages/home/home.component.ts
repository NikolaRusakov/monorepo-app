import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthFacade, User } from '@fapp/auth/domain';

@Component({
  selector: 'fapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  users$ = this.userFacade.users$;

  constructor(private userFacade: AuthFacade) {}

  identifyUser(_: number, card: User): string {
    return card.uid;
  }
}
