import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiocontrasePageRoutingModule } from './cambiocontrase-routing.module';

import { CambiocontrasePage } from './cambiocontrase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiocontrasePageRoutingModule
  ],
  declarations: [CambiocontrasePage]
})
export class CambiocontrasePageModule {}
