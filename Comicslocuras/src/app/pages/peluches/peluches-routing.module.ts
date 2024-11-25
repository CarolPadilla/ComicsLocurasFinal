import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeluchesPage } from './peluches.page';

const routes: Routes = [
  {
    path: '',
    component: PeluchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeluchesPageRoutingModule {}
