import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritoComprasPage } from './carritocompras.page';

const routes: Routes = [
  {
    path: '',
    component: CarritoComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritocomprasPageRoutingModule {}