import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
// import {FirebaseUIModule} from 'firebaseui-angular';
// import * as firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';
// currently there is a bug while building the app with --prod
// - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// the plugin exposes the two libraries as well. You can use those:
import { firebaseui } from 'firebaseui-angular';
import { AuthConfigType } from './shared-auth-config.model';
import { SharedUtilAuthService } from './shared-util-auth.service';

export interface AuthModuleConfig<T> {
  config?: AuthConfigType<T>;
  firebaseUiAuthConfig: firebaseui.auth.Config;
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [SharedUtilAuthService]
})
export class SharedUtilAuthModule {
  /*static forRoot<T>({
                      config,
                      firebaseUiAuthConfig
                    }: AuthModuleConfig<T>): ModuleWithProviders {
    return {
      ngModule: SharedUtilAuthModule,
      providers: [
        {
          provide: APP_CONFIG<T>(),
          useValue: config
        },
      ]
    };
  }*/

}
