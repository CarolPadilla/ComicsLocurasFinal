import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarcontrasePageRoutingModule } from './recuperarcontrase-routing.module';

import { RecuperaContraPage } from './recuperarcontrase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarcontrasePageRoutingModule
  ],
  declarations: [RecuperaContraPage]
})
export class RecuperarcontrasePageModule {}
