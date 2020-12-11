import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-header',
  templateUrl: './time-header.component.html',
  styleUrls: ['./time-header.component.css']
})
export class TimeHeaderComponent implements OnInit {
  @Input() username: string;

  constructor() { }
  public currentDate;
  public timer;

  ngOnInit(): void {
    console.log(this.username)
    this.timer = setInterval(() => { this.currentDate = new Date()},1000)
  }

}
