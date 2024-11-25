import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CarritocomprasPageRoutingModule } from './carritocompras-routing.module';

import { CarritoComprasPage } from './carritocompras.page'; // Cambiar a CarritoComprasPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritocomprasPageRoutingModule
  ],
  declarations: [CarritoComprasPage] // Cambiar a CarritoComprasPage
})
export class CarritocomprasPageModule {}