import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { HomePage } from '../home/home.page';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-logsleepiness',
  templateUrl: './logsleepiness.page.html',
  styleUrls: ['./logsleepiness.page.scss'],
})
export class LogsleepinessPage implements OnInit {
  private scaleNum: any;
  private dateval: any;
  private sleepdate: number = 0;
  set setScale(value: any){
    console.log({value});
    this.scaleNum = value;
  }

  get scale(): any{
    return this.scaleNum;
  }

  set date(value: any){
    console.log({value});
    this.dateval = value;
  }

  get date(): any{
    return this.dateval;
  }
  constructor(public router: Router, private localStorage: Storage) { }

  ngOnInit() {
  }
  
  backToHome(){
    this.router
    .navigate(['home']);
  }

  async submit(){
    let data:StanfordSleepinessData  = new StanfordSleepinessData(this.scaleNum, this.dateval);
    let setSleepKey =  "date" + this.sleepdate.toString();
    await this.localStorage.set(setSleepKey, data);
    this.localStorage.get(setSleepKey).then(data =>{
      console.log(data);
    })
    
  }
}
