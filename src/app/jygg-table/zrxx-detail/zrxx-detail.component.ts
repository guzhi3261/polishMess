import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-zrxx-detail',
  templateUrl: './zrxx-detail.component.html',
  styleUrls: ['./zrxx-detail.component.css']
})
export class ZrxxDetailComponent implements OnInit {

  constructor() { }
  swiperList: any [] = [];

  ngOnInit(): void {
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

