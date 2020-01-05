import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacade } from '@fapp/auth/domain';

@NgModule({
  imports: [CommonModule],
  providers: [AuthFacade]
})
export class AuthApiModule {}
