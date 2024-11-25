import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPerfilPageRoutingModule } from './verperfil-routing.module';

import { VerPerfilPage } from './verperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPerfilPageRoutingModule
  ],
  declarations: [VerPerfilPage]
})
export class VerPerfilPageModule {}
