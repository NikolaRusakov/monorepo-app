import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDataAccessModule } from './infrastructure';
import { AuthFacade } from './application-services';

@NgModule({
  imports: [CommonModule, AuthDataAccessModule]
})
export class AuthDomainModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthDomainModule,
      providers: [AuthFacade]
    };
  }
}
