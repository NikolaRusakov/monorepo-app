import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { User } from '@fapp/auth/domain';

@Component({
  selector: 'mapp-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user: User;
  @Output() clickDetails = new EventEmitter();
}
