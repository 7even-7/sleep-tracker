import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Chart} from 'chart.js';
@NgModule({
  declarations: [AppComponent],
  imports: [
  BrowserModule, NgApexchartsModule, IonicModule.forRoot(), FormsModule, ReactiveFormsModule,
  AppRoutingModule, IonicStorageModule.forRoot()
  ],
  providers: [Storage, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
