import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AuthFacade } from '@fapp/auth/domain';
import { UserAvatarComponent } from './user-avatar.component';
import {
  AuthFirebaseComponentModule,
  LetDirectiveModule
} from '@fapp/shared/ui';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    AuthFirebaseComponentModule,
    LetDirectiveModule
  ],
  providers: [AuthFacade],
  exports: [UserAvatarComponent]
})
export class UserAvatarModule {}
