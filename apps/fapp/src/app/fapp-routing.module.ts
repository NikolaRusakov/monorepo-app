import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users-page.module').then(m => m.UsersPageModule)
  },
  {
    path: '**',
    redirectTo: `/home`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FappRoutingModule {}
