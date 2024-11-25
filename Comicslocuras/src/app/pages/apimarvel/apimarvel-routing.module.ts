import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApimarvelPage } from './apimarvel.page';

const routes: Routes = [
  {
    path: '',
    component: ApimarvelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApimarvelPageRoutingModule {}
