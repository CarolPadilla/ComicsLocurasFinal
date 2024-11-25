import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaContraPage } from './recuperarcontrase.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarcontrasePageRoutingModule {}
