import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-header',
  templateUrl: './time-header.component.html',
  styleUrls: ['./time-header.component.css']
})
export class TimeHeaderComponent implements OnInit {

  constructor() { }
  public currentDate;
  // public currentDate = new Date();
  // y; 
  // m; 
  // date; 
  // day; 
  // hs; 
  // ms; 
  // ss; 
  // theDateStr;
  // days = new Array("日", "一", "二", "三", "四", "五", "六");
  timer;

  ngOnInit(): void {
    // window.setTimeout(this.showDate,1000)
    this.timer = setInterval(() => { this.currentDate = new Date()},1000)
  }
  // showDate(){
  //   var currentDate = new Date()
  //   this.y = currentDate.getFullYear();
  //   this.m = currentDate.getMonth()+1;
  //   this.date = currentDate.getDate();
  //   this.day = currentDate.getDay();
  //   this.hs = currentDate.getHours();
  //   this.y = currentDate.getFullYear();
  //   if (this.hs < 10) {
  //     this.hs = "0" + this.hs;
  // }
  // this.ms = currentDate.getMinutes(); //分
  // if (this.ms < 10) {
  //     this.ms = "0" + this.ms;
  // }
  // this.ss = currentDate.getSeconds(); //秒
  // if (this.ss < 10) {
  //     this.ss = "0" + this.ss;
  // }
  // }

}
