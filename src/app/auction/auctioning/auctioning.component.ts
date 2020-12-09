import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { interval } from 'rxjs';
import { take } from 'rxjs/operators'

 
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
  remainTime;
  constructor() { }
  public numbers = interval(1000); // 设置一个计时器
  public takeFourNumbers = this.numbers.pipe(take(18000));
      
  ngOnInit(): void {
    //进度条计时器
    let interval = setInterval(() => {
      //每隔2秒随机一个value,value随机加一个1-11的数，加到100，进度条走完
      this.value = this.value + 1;
      if (this.value >= 100) {
          this.value = 100;
          clearInterval(interval);
      }
    }, 18000);
    
    this.getPrice();   

    //页面倒计时
    this.takeFourNumbers.subscribe(
      x => {
        this.remainTime = (18000-x)+"秒后结束竞拍";
      },
      error => {},
      () => {
        this.remainTime = "竞拍结束！";
     });  
    //倒计时结束
    }
    
    getPrice(){
      this.now = moment().format('h:mm:ss')    
      this.price  = this.bidPrice
    }        
}


