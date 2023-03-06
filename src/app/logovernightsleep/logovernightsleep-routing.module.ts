import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogovernightsleepPage } from './logovernightsleep.page';

const routes: Routes = [
  {
    path: '',
    component: LogovernightsleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogovernightsleepPageRoutingModule {}
