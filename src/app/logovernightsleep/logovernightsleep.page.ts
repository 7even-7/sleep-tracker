import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { HomePage } from '../home/home.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-logovernightsleep',
  templateUrl: './logovernightsleep.page.html',
  styleUrls: ['./logovernightsleep.page.scss'],
})
export class LogovernightsleepPage implements OnInit {

  constructor(public sleepService:SleepService, private router: Router) { }
  private startime: any;
  private endtime: any;
  get date(): any{
    return this.startime;
  }

  set date(value: any){
    //console.log({value});
    this.startime = value;
  }

  get enddate(): any{
    return this.endtime;
  }

  set enddate(value: any){
    //console.log({value});
    this.endtime = value;
  }

  ngOnInit() {
  }
  backToHome(){
    this.router.navigate(['home']);
  }
  submit(){
    //this.localStorage.set("start", this.startime);
  }
  
}
