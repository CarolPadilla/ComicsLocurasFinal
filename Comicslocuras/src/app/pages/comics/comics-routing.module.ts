import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsPage } from './comics.page';

const routes: Routes = [
  {
    path: '',
    component: ComicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsPageRoutingModule {}
