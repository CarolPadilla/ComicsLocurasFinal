import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunkopopPage } from './funkopop.page';

const routes: Routes = [
  {
    path: '',
    component: FunkopopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunkopopPageRoutingModule {}
