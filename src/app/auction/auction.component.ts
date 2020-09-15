import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor() { }
  activeMyAuction = true;
  activeAuctionRule = false;
  ngOnInit(): void {
  }

  myAuction():boolean{
    if(this.activeAuctionRule){
      this.activeAuctionRule = false;
    }
    return this.activeMyAuction = true;
  }
  auctionRule(){
    if(this.activeMyAuction){
      this.activeMyAuction = false
    }
    return this.activeAuctionRule = true
  }
}
