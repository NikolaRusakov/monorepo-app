import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
// import { Routes, RouterModule } from '@angular/router';
import { IonicServerModule } from '@ionic/angular-server';

// const routes: Routes = [
//   {
//     path: 'shell',
//     loadChildren: () =>
//       import('./app-shell/app-shell.module').then(m => m.AppShellModule)
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
//     // loadChildren: () =>
//     //   import('./app-shell/app-shell.module').then(m => m.AppShellModule)
//   }
// ];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    // RouterModule.forRoot(routes),
    IonicServerModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
