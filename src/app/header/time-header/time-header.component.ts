import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetUsernameService } from 'src/app/model/get-username.service';
import * as g from '../../model/globals'

@Component({
  selector: 'app-time-header',
  templateUrl: './time-header.component.html',
  styleUrls: ['./time-header.component.css']
})
export class TimeHeaderComponent implements OnInit {
  @Input() username: string;
  // @ViewChild('liteLogin') 

  public currentDate;
  public timer;
  public isActive: boolean = false;
  constructor(){
    g.global.userName = this.username;
  }

  ngOnInit(): void {
    this.timer = setInterval(() => { this.currentDate = new Date()},1000)
  }
  signIn(){
    this.isActive = true;

  }


}
