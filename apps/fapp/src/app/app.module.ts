import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AuthFirebaseComponentModule } from '@fapp/shared/ui';
import {
  RouterState,
  StoreRouterConnectingModule,
  routerReducer
} from '@ngrx/router-store';
import { AuthDataAccessModule } from '@fapp/auth/data-access';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { FappRoutingModule } from './fapp-routing.module';
import { HomeModule } from './home/home.module';
import { EffectsModule } from '@ngrx/effects';
import {
  AngularFirestoreModule,
  FirestoreSettingsToken
} from '@angular/fire/firestore';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    FappRoutingModule,
    HomeModule,
    IonicModule.forRoot(),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Full }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthDataAccessModule,
    AuthFirebaseComponentModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    // {
    //   provide: FirestoreSettingsToken,
    //   useValue: environment.production ? undefined : {
    //     host: 'localhost:8080',
    //     ssl: false
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
