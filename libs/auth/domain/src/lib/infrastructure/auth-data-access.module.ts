import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { StoreModule } from '@ngrx/store';
import { reducer, usersFeatureKey } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeatureKey, reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [],
  exports: []
})
export class AuthDataAccessModule {}
