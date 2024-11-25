import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunkopopPageRoutingModule } from './funkopop-routing.module';

import { FunkopopPage } from './funkopop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunkopopPageRoutingModule
  ],
  declarations: [FunkopopPage]
})
export class FunkopopPageModule {}
