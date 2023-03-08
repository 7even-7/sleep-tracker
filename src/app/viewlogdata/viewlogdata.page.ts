import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Chart, registerables} from 'chart.js';
import { Storage } from '@ionic/storage';
import { OvernightSleepData } from '../data/overnight-sleep-data';
@Component({
  selector: 'app-viewlogdata',
  templateUrl: './viewlogdata.page.html',
  styleUrls: ['./viewlogdata.page.scss'],
})
export class ViewlogdataPage implements OnInit {
  //@Input() barCanvas: string;
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  @ViewChild('sleepDataCanvas') public sleepDataCanvas: ElementRef;
  barChart: any;
  sleepBarChart: any;
  private totalHoursArray: string[] = [];
  private loggedDatesArray: number[] = [];
  private sleepinessArray: number [] = [];
  private sleepLoggedDateArray: number [] = [];
  private state:boolean = false;
  private sleepState: boolean = false;
  constructor(private router: Router, private localStorage: Storage, private elementRef: ElementRef) { 
    Chart.register(...registerables);
  }
  ngOnInit() {
  }

  ionViewWillEnter(){
    //this.ShowOverNightSleepMethod();
    
  }
  
  ShowOverNightSleepMethod(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.loggedDatesArray,//['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: this.totalHoursArray,//[2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  ShowSleepinessMethod(){
    this.sleepBarChart = new Chart(this.sleepDataCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  async getDataOverNightSleepData(){
    this.localStorage.forEach((value, key, index ) =>{
       if (key.includes("loggedDate")){
          //console.log(value);
          this.loggedDatesArray.push(value);
          
       }
       if (key.includes("sleepHours")){
          //console.log(value);
          this.totalHoursArray.push(value);
        
     }
      //console.log(key);
      //console.log(value);
      
    });
    // this.localStorage.get("starttime0").then(data => {
    //   console.log(data);
    // });
  }

  async getSleepinessData(){
    this.localStorage.forEach((value, key, index ) =>{
       if (key.includes("date")){
        console.log(value.summaryString);
       }
      //console.log(key);
      //console.log(value);
      
    });
    // this.localStorage.get("starttime0").then(data => {
    //   console.log(data);
    // });
  }
  
  backToHome(){
    this.router.navigate(['home']);
  }

  ShowOverNightSleep(){
    
    this.getDataOverNightSleepData();
    
    if (!this.state){
      
      setTimeout( () => this.ShowOverNightSleepMethod(), 1000);
      this.state = true;
      this.totalHoursArray.splice(0);
      this.loggedDatesArray.splice(0);
    }
    else{
        this.barChart.destroy();
        this.state = false;
    }
  } 
  

  ShowSleepiness(){
    this.getSleepinessData();
    
    if (!this.sleepState){
      
      setTimeout( () => this.ShowSleepinessMethod(), 1000);
      this.sleepState = true;
      this.sleepinessArray.splice(0);
      this.sleepLoggedDateArray.splice(0);
    }
    else{
        this.sleepBarChart.destroy();
        this.sleepState = false;
    }
  }
}
