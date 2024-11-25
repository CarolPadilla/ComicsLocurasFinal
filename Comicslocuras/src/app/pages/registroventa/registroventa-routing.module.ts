import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroventaPage } from './registroventa.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroventaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroventaPageRoutingModule {}
