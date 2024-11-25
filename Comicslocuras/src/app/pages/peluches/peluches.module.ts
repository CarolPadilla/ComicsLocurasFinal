import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeluchesPageRoutingModule } from './peluches-routing.module';

import { PeluchesPage } from './peluches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeluchesPageRoutingModule
  ],
  declarations: [PeluchesPage]
})
export class PeluchesPageModule {}
