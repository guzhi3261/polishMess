import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cjgg-detail',
  templateUrl: './cjgg-detail.component.html',
  styleUrls: ['./cjgg-detail.component.css']
})
export class CjggDetailComponent implements OnInit {
    
    constructor(private http:HttpClient, protected activatedroute: ActivatedRoute, private route: Router) { 
        this.id = this.activatedroute.snapshot.params['id'];
      }
      contentUrl = "http://218.29.137.134:22742/api/services/app/ChengJiaoXinXies/GetChengJiaoXinXiForEdit?Id=";
      id:string;
      cjxx: any;
      public xiangMuMingCheng: string;
      public biaoDiQuYu: string;
      public chengJiaoJiaGe: string;
      public shouRangFang: string;
      public zhuanChuFang: string;
      public chengJiaoJiaGeDanWei: string;
    swiperList: any [] = [];


  ngOnInit(): void {
    setTimeout(() => {
        //轮播图片组
      this.swiperInit();
      }, 0);
      this.swiperList = [
      {
          imgUrl: 'http://www.jsnc.gov.cn/nccqjy/portal.do?method=downLoadFile&&id=2c9004127445c8bc0174488a3e1d3182'
      },
      {
          imgUrl: 'http://www.jsnc.gov.cn/nccqjy/portal.do?method=downLoadFile&&id=2c9004127445c8bc0174488a3e0d3181'
      },
      
      ];
      //http请求数据
        this.http.get(this.contentUrl + this.id).subscribe((res) => {
        this.cjxx = res['result']['chengJiaoXinXi']
        this.xiangMuMingCheng = this.cjxx.xiangMuMingCheng;
        this.biaoDiQuYu = this.cjxx.biaoDiQuYu;
        this.chengJiaoJiaGe = this.cjxx.chengJiaoJiaGe;
        this.shouRangFang = this.cjxx.shouRangFang;
        this.zhuanChuFang = this.cjxx.zhuanChuFang;
        this.chengJiaoJiaGeDanWei = this.cjxx.chengJiaoJiaGeDanWei;
        console.log(this.cjxx);
    });
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


