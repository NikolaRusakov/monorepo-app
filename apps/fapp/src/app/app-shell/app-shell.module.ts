import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  declarations: [AppShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AppShellComponent }])
  ],
  exports: [AppShellComponent]
})
export class AppShellModule {}
