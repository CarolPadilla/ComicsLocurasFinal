import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiocontrasePage } from './cambiocontrase.page';

const routes: Routes = [
  {
    path: '',
    component: CambiocontrasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiocontrasePageRoutingModule {}
