import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroventaPageRoutingModule } from './registroventa-routing.module';

import { RegistroventaPage } from './registroventa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroventaPageRoutingModule
  ],
  declarations: [RegistroventaPage]
})
export class RegistroventaPageModule {}
