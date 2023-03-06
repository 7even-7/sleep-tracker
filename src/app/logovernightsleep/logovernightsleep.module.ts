import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogovernightsleepPageRoutingModule } from './logovernightsleep-routing.module';

import { LogovernightsleepPage } from './logovernightsleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogovernightsleepPageRoutingModule
  ],
  declarations: [LogovernightsleepPage]
})
export class LogovernightsleepPageModule {}
