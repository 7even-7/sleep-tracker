import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewlogdata',
  templateUrl: './viewlogdata.page.html',
  styleUrls: ['./viewlogdata.page.scss'],
})
export class ViewlogdataPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome(){
    this.router.navigate(['home']);
  }

  ShowOverNightSleep(){

  }

  ShowSleepiness(){

  }
}
