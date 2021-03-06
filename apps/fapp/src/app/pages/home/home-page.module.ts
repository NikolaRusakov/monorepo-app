import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserAvatarComponentModule } from '@fapp/auth/feature';
import { UserCardComponentModule } from '@fapp/shared/ui';
import { IonicModule } from '@ionic/angular';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    MatGridListModule,
    UserAvatarComponentModule,
    UserCardComponentModule
  ],
  exports: [HomeComponent]
})
export class HomePageModule {}
