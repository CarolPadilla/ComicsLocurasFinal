import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApimarvelPageRoutingModule } from './apimarvel-routing.module';

import { ApimarvelPage } from './apimarvel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApimarvelPageRoutingModule
  ],
  declarations: [ApimarvelPage]
})
export class ApimarvelPageModule {}
