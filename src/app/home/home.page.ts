import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { LogovernightsleepPage } from '../logovernightsleep/logovernightsleep.page';
import { Router } from '@angular/router';
import { LogsleepinessPage } from '../logsleepiness/logsleepiness.page';
import { ViewlogdataPage } from '../viewlogdata/viewlogdata.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	 
  constructor(public sleepService:SleepService, private router: Router) {
	}

	ngOnInit() {
		console.log(this.allSleepData);
	}
	
	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}
	//link to log sleep data page
	goLogSleep(){
		this.router.navigate(['logovernightsleep']);
	}

	goLogSleepiness(){
		this.router.navigate(['logsleepiness']);
	}

	goViewLogData(){
		this.router.navigate(['viewlogdata']);
	}

}
