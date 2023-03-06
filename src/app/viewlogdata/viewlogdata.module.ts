import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewlogdataPageRoutingModule } from './viewlogdata-routing.module';

import { ViewlogdataPage } from './viewlogdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewlogdataPageRoutingModule
  ],
  declarations: [ViewlogdataPage]
})
export class ViewlogdataPageModule {}
