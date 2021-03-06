import { Component, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ZhuanChuInfo } from './zhuanchuxinxi';
import { LiteLoginComponent } from 'src/app/common/lite-login/lite-login.component';
import * as g from '../../model/globals'
import { GetUsernameService } from 'src/app/model/get-username.service';



@Component({
  selector: 'app-zrxx-detail',
  templateUrl: './zrxx-detail.component.html',
  styleUrls: ['./zrxx-detail.component.css']
})
export class ZrxxDetailComponent implements OnInit {

  // @ViewChild('liteLogin') loginShow: LiteLoginComponent;
  isActive :boolean = false

  constructor(
    private http: HttpClient, 
    protected activatedroute: ActivatedRoute, 
    private route: Router,
    private GetUsernameService: GetUsernameService) {
    this.id = this.activatedroute.snapshot.params['id'];
  }

  contentUrl = "http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetGongYingXinXiForEdit?Id=";
  id: string;
  userId: number;
  zrxx: any;
  user: string ;
  public xiangMuMingCheng;
  public xiangMuBianHao;
  public jiaoYiFangShi;
  public faBuQuYu;
  public zhuanChuBegin;
  public zhuanChuEnd;
  public chuangJianRiQi;
  public zhuanChuYongTu;
  public zhuanChuFangLeiXing;

  diKuaiList: [];
  diKuaiMingCheng: string;
  zuoLuo: string;
  mianJi: string;
  dongZhi: string;
  nanZhi: string;
  beiZhi: string;
  // xiiZhi: string;
  tuDiXingZhi: string;
  fuzhuowuList_mingCheng: string;
  fuzhuowuList_shuLiang: 0;
  fuzhuowuList_quanShu: string;
  qiTa: string;

  public zhuanChuFangMingCheng;
  public zhuanChuFang_dianHua;

  public zhuanChuFangShi;
  public shiFouZaiCiZhuanChu;
  public guaPaiJiaGe;
  public guaPaiJiaGeDanWei;
  public zhiFuFangShi;
  public zhuanRangXiangGuanQiTaTiaoJian;
  public shouRangFangTiaoJian;
  public shiFouJiaoNaBaoZhengJin;
  public jiaoYiBaoZhengJin;
  public jiaoNaXingShi;
  public guaPaiQi;
  public qiManChuLiFangShi;
  public zhangHuMingCheng;
  public kaiHuYinHang;
  public jiaKuanHuaRuZhangHao;
  public zhanShiTuPian;
  public fuJian;


  public baoMingRequestUrl = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/CreateOrEdit';
  public time = new Date()
  
  public baoMingRequestBody = {
    'projectID': '',
    'userId': 0,
    'projectName': '',
    'createTime': this.time.toISOString(),
    'userName': '',
    "projectType": 0,
    "status": 0,
    "jingJiaKaiShiShiJian": this.time.toISOString(),
    "jiaoYiFangShi": 0,
    "jingJiaFangShi": 0,
    "shiFouZhongBiao": true,
    "jiaGe": 0,
    
  };

  swiperList: any[] = [
    // {
    //   imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20190111/1547185316391.jpg'
    // },
    // {
    //   imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20181229/1546050204895.jpg'
    // },
    // {
    //   imgUrl: 'http://www.yyth.com.cn/uploadDir/jpg/20181229/1546061999592.jpg'
    // }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.swiperInit();
    }, 0);
    this.http.get(this.contentUrl + this.id).subscribe((res) => {
      this.zrxx = res['result']['gongYingXinXi']
      this.xiangMuMingCheng = this.zrxx.xiangMuMingCheng;
      this.xiangMuBianHao = this.zrxx.xiangMuBianHao;
      this.jiaoYiFangShi = this.zrxx.jiaoYiFangShi;
      this.faBuQuYu = this.zrxx.faBuQuYu;
      this.zhuanChuBegin = this.zrxx.zhuanChuBegin;
      this.zhuanChuEnd = this.zrxx.zhuanChuEnd;
      this.chuangJianRiQi = this.zrxx.chuangJianRiQi;
      this.tuDiXingZhi = this.zrxx.tuDiXingZhi;
      this.zhuanChuYongTu = this.zrxx.zhuanChuYongTu;
      this.zhuanChuFangLeiXing = this.zrxx.zhuanChuFangLeiXing;
      this.zhanShiTuPian = this.zrxx.zhanShiTuPian;


      this.zhuanChuFangMingCheng = this.zrxx.zhuanChuFangMingCheng;
      this.zhuanChuFang_dianHua = this.zrxx.dianHua;
      this.zhuanChuFangShi = this.zrxx.zhuanChuFangShi;
      this.shiFouZaiCiZhuanChu = this.zrxx.shiFouZaiCiZhuanChu;
      this.guaPaiJiaGe = this.zrxx.guaPaiJiaGe;
      this.guaPaiJiaGeDanWei = this.zrxx.guaPaiJiaGeDanWei;
      this.zhiFuFangShi = this.zrxx.zhiFuFangShi;
      this.zhuanRangXiangGuanQiTaTiaoJian = this.zrxx.zhuanRangXiangGuanQiTaTiaoJian;
      this.shouRangFangTiaoJian = this.zrxx.shouRangFangTiaoJian;
      this.shiFouJiaoNaBaoZhengJin = this.zrxx.shiFouJiaoNaBaoZhengJin;
      this.jiaoYiBaoZhengJin = this.zrxx.jiaoYiBaoZhengJin;
      this.jiaoNaXingShi = this.zrxx.jiaoNaXingShi;
      this.guaPaiQi = this.zrxx.guaPaiQi;
      this.qiManChuLiFangShi = this.zrxx.qiManChuLiFangShi;
      this.zhangHuMingCheng = this.zrxx.zhangHuMingCheng;
      this.kaiHuYinHang = this.zrxx.kaiHuYinHang;
      this.jiaKuanHuaRuZhangHao = this.zrxx.jiaKuanHuaRuZhangHao;
      this.fuJian = this.zrxx.fuJian;


      this.diKuaiList = this.zrxx.diKuaiList;
      this.swiperList = this.zrxx.zhanShiTuPian

      // this.fuzhuowuList_mingCheng = this.zrxx.diKuaiList.fuzhuowuList.mingCheng;
      // this.fuzhuowuList_shuLiang = this.zrxx.diKuaiList.fuzhuowuList.shuLiang;
      // this.fuzhuowuList_quanShu = this.zrxx.diKuaiList.fuzhuowuList.quanShu;

    });
    
  }
  // 轮播图初始化
  swiperInit() {
    // tslint:disable-next-line: no-unused-expression
    new Swiper('.swiper-container', {
      direction: 'horizontal', // 水平切换选项
      loop: true, // 循环模式选项
      speed: 600, // 滑动时间
      grabCursor: true, // 鼠标指针形状
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false // 手动滑动之后依然自动轮播
      }, // 自动滑动
      effect: 'fade', // 切换效果
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
  signUp() {
    //登录成功拿到用户id
    this.GetUsernameService.userId.subscribe(id => this.userId = id) 
    //登录成功拿到用户名
    this.GetUsernameService.username.subscribe(user => this.user = user);
      this.baoMingRequestBody = {
        'projectID': this.id,
        'userId': this.userId,
        'projectName': this.xiangMuMingCheng,
        'createTime': this.time.toISOString(),
        'userName': this.user,
        "projectType": 1,
        "status": 0,
        "jingJiaKaiShiShiJian": this.time.toISOString(),
        "jiaoYiFangShi": this.jiaoYiFangShi,
        "jingJiaFangShi": 0,
        "shiFouZhongBiao": false,
        "jiaGe": this.guaPaiJiaGe,       
      }
      if(this.user){
        //整合用户名和供应id，创建一个报名信息
        this.http.post(this.baoMingRequestUrl,this.baoMingRequestBody).subscribe((res)=> {
          if(res['success']){
            alert("你已经报名！");
          }
        })
      }else{
        this.isActive =  this.isActive == true ? false: true;
      }
   
  }
    
  }    
    

