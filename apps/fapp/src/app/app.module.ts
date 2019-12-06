import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), IonicModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
