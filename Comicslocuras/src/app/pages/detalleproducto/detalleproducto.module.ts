import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleproductoPageRoutingModule } from './detalleproducto-routing.module';

import { DetalleproductoPage } from './detalleproducto.page';
import { StorageService } from 'src/app/services/servicebd.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleproductoPageRoutingModule
  ],
  declarations: [DetalleproductoPage],
  providers: [StorageService],  // Asegúrate de que el servicio está aquí
})
export class DetalleproductoPageModule {}
