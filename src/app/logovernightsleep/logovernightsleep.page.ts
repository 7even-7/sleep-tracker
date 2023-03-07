// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { SleepService } from '../services/sleep.service';
// import { SleepData } from '../data/sleep-data';
// import { OvernightSleepData } from '../data/overnight-sleep-data';
// import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
// import { HomePage } from '../home/home.page';
// import { Storage } from '@ionic/storage';
// import { StorageService } from '../services/storage.service';

// @Component({
//   selector: 'app-logovernightsleep',
//   templateUrl: './logovernightsleep.page.html',
//   styleUrls: ['./logovernightsleep.page.scss'],
// })
// export class LogovernightsleepPage implements OnInit {

//   constructor(public sleepService:SleepService, private router: Router, private localStorage:Storage) { }
//   private startime: any;
//   private endtime: any;
 

//   get date(): any{
//     return this.startime;
//   }

//   set date(value: any){
//     //console.log({value});
//     this.startime = value;
//   }

//   get enddate(): any{
//     return this.endtime;
//   }

//   set enddate(value: any){
//     //console.log({value});
//     this.endtime = value;
//   }

//   ngOnInit() {
//   }
//   backToHome(){
//     this.router.navigate(['home']);
//   }
//   submit(){
//     //console.log(this.startime);
//     if (this.startime){
//       this.localStorage.set("start", this.startime);
    
//       this.localStorage.get("start").then(data => {
//         console.log(data);
//       });
    
//     }
//     this.startime = null;
    
//   }

  
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-logovernightsleep',
  templateUrl: './logovernightsleep.page.html',
  styleUrls: ['./logovernightsleep.page.scss'],
})
export class LogovernightsleepPage implements OnInit {

  constructor(
    public sleepService: SleepService,
    private router: Router,
    private storage: Storage
  ) {}

  private startime: any;
  private endtime: any;
  private sleeptime: number = 0;

  get date(): any {
    return this.startime;
  }

  set date(value: any) {
    this.startime = value;
  }

  get enddate(): any {
    return this.endtime;
  }

  set enddate(value: any) {
    this.endtime = value;
  }

  ngOnInit() {}

  backToHome() {
    this.router.navigate(['home']);
  }

  async submit() {
    if (this.startime) {
      // Store start time in Ionic Storage
      let timekey = "starttime" + this.sleeptime.toString();
      await this.storage.set(timekey, this.startime);

      // Retrieve start time from Ionic Storage and log to console
      const start = await this.storage.get(timekey);
      console.log('Logged start time:', start);
      this.sleeptime += 1;

      this.storage.length().then(result =>{
        console.log(result);
        });
    }

    // Reset start time
    this.startime = null;
  }
}