import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { IonicModule } from '@ionic/angular';
import { LetDirectiveModule } from '../let-directive/let-directive.module';

@NgModule({
  declarations: [UserCardComponent],
  imports: [CommonModule, IonicModule, LetDirectiveModule],
  exports: [UserCardComponent]
})
export class UserCardComponentModule {}
