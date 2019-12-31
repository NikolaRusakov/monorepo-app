import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserAvatarModule } from '@fapp/auth/feature';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    UserAvatarModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
