import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { NewsService } from 'src/app/model/News.service';
import { News } from 'src/app/model/News.model';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http: HttpClient, private service: NewsService) { }
  swiperList: any [] = [];
  public newses: any = [];
  public newsTop: {} = {};
  public baseUrl: any = 'http://218.29.137.134:22742/api/services/app/Newses/GetAll';
  public news: any;
  public id: number;
ngOnInit(): void {
    // 请求数据
    // this.getNewses();
    this.http.get(this.baseUrl).subscribe((res: Response) => {
    this.newses = res['result']['items'];
    this.newsTop =  this.newses[0]['news']['title'];
    this.news = this.newses[0].news;
    this.id = this.news.id
    
    console.log(this.newsTop);
    // console.log(res);
      });
     // 轮播图初始化
    setTimeout(() => {
    this.swiperInit();
    }, 0);
    this.swiperList = [
    {
        imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20190111/1547185316391.jpg'
    },
    {
        imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20181229/1546050204895.jpg'
    },
    {
        imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20181229/1546061999592.jpg'
    }
    ];
}
// getNewses(): void {
//     this.newses = this.service.getNewses().subscribe(
//         data => {
//             this.newses = data;
//             console.log(data);
//             console.log(this.newses);
//             // return this.newses;
//         });
    // console.log( this.newses );
    // return this.newses['result']['items'];
    // this.newsTop = this.newses[0]['news']['title'];
    // console.log(this.newsTop);
// }
// 轮播图初始化
swiperInit() {
    // tslint:disable-next-line: no-unused-expression
    new Swiper ('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        speed: 600, // 滑动时间
        grabCursor: true, // 鼠标指针形状
        autoplay: {
            delay: 1500,
            stopOnLastSlide: false,
            disableOnInteraction: false // 手动滑动之后依然自动轮播
        }, // 自动滑动
        effect : 'fade', // 切换效果
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        navigation: {  // 分页器
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: { // 如果需要前进后退按钮
            el: '.swiper-pagination',
        },
        scrollbar: { // 如果需要滚动条
            el: '.swiper-scrollbar',
        }
    });
}
}


