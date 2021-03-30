import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swipper-pic',
  templateUrl: './swipper-pic.component.html',
  styleUrls: ['./swipper-pic.component.css']
})
export class SwipperPicComponent implements OnInit {

  constructor(private http:HttpClient) { }
  // swiperList:[{imgUrl : string ,id: number}];
  swiperList:Array<Object> = [];
  picUrl = 'http://218.29.137.134:22742/api/services/app/Newses/GetAll?AtTopFilter=-1&NewsTypeNewsTypeTitleFilter=%E5%9B%BE%E7%89%87%E6%96%B0%E9%97%BB'
  swiperPicUrl = 'http://218.29.137.134:22742/api/services/app/Newses/GetNewsForEdit?Id='
  picNewsId;
  news:any;
  ngOnInit(): void {
    this.http.get(this.picUrl).subscribe((res)=>{
      this.news = res['result'].items;
      this.news = this.news.filter(item => item['news']['image'] != null )
      for(let i=0; i<this.news.length;i++){
        this.swiperList.push({imgUrl :this.addImageIp(this.news[i]['news']['image']),id:this.news[i].news.id});

      }
    })
    setTimeout(() => {
      this.swiperInit();
      }, 500);
      // this.swiperList = this.swiperList.slice(0,1)
      // this.swiperList = [
      // {
      //     imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20190111/1547185316391.jpg'
      // },
      // {
      //     imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20181229/1546050204895.jpg'
      // },
      // {
      //     imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20181229/1546061999592.jpg'
      // }
      // ];
  }
  addImageIp(images0: string): string {
    if (images0) {
        let re = /@/gi;
        images0 = images0.replace(re, 'http://218.29.137.134:22742'); 
         return images0;
    } else {
        return null;
    }
  }
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
  

  
