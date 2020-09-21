import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

 
@Component({
  selector: 'app-auctioning',
  templateUrl: './auctioning.component.html',
  styleUrls: ['./auctioning.component.css']
})
export class AuctioningComponent implements OnInit {

  value: number = 0;
  now: any;
  bidPrice;
  price;
  constructor() { }

  ngOnInit(): void {
    this.now = moment().format('h:mm:ss')
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
          this.value = 100;
          clearInterval(interval);
      }
    }, 2000);
    
    }
    getPrice(){
      this.price  = this.bidPrice
    }
}


