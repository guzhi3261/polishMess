import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auctioning',
  templateUrl: './auctioning.component.html',
  styleUrls: ['./auctioning.component.css']
})
export class AuctioningComponent implements OnInit {

  value: number = 0;
  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
          this.value = 100;
          clearInterval(interval);
      }
    }, 2000);
    }
}


