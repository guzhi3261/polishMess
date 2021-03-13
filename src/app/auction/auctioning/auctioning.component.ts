import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { GetUsernameService } from 'src/app/model/get-username.service';

//报名信息的projectId是对应某条竞价信息的id，

 
@Component({
  selector: 'app-auctioning',
  templateUrl: './auctioning.component.html',
  styleUrls: ['./auctioning.component.css']
})
export class AuctioningComponent implements OnInit {
  
  baoMingGetAllUrl = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetAll?ProjectTypeFilter=2&JiaoYiFangShiFilter=-1&JingJiaFangShiFilter=-1&StatusFilter=-1&ShiFouZhongBiaoFilter=-1&ProjectIDFilter='
  baoMingGetForEdit = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetBaoMingXinXiForEdit?Id='

  jingjiaUrl = 'http://218.29.137.134:22742/api/services/app/JingJiaModels/GetJingJiaModelForEdit?Id=';
  gongyingUrl = 'http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetGongYingXinXiForEdit?Id=';

  baojiaUrl = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/CreateOrEdit';
  value: number = 0;
  now: any;
  bidPrice;
  price;
  maxPrice = 0;
  remainTime;
  username;
  userId;
  id;
  baoMingXinXi;
  baoMingXinXiId;
  //用到的jingjiaModel信息
  public jingJiaModel: any;
  public jingJiaId: string;
  public BiaoDuanMiaoShu: string; // 项目名称
  public bianHao: string; // 项目编号
  public GongShiRiQi; 
  public JingPaiShiJian; 
  
  public jjBianHao; //供应信息的id

  //用到的gongying信息
  gyxx;
  public jingJiaFangShi;
  public jiaoYiFangShi;

  
  
  @ViewChild('oneButton') obtn: ElementRef;
  constructor(protected activatedroute: ActivatedRoute, 
    private GetUsernameService: GetUsernameService,
    private http:HttpClient,
    private elementRef: ElementRef) { 
    this.id = this.activatedroute.snapshot.params['id'];
   this.username  = localStorage.getItem("user");
   this.userId  = localStorage.getItem("userId");
  }
  public numbers = interval(1000); // 设置一个计时器
  public takeFourNumbers = this.numbers.pipe(take(18000));
      
  ngOnInit(): void {
    
    // 页面进度条
    this.Countdown()

    //获取竞价信息，分类别显示
    this.http.get(this.jingjiaUrl+this.id).subscribe(res => {
      console.log(res['result'].jingJiaModel)
      this.jingJiaModel = res['result'].jingJiaModel;
      this.jingJiaId = this.jingJiaModel.id;
      
      this.bianHao = this.jingJiaModel.xiangMuBianHao;
      this.jjBianHao = this.jingJiaModel.bdxX_BiaoDuanBianHao;
      this.GongShiRiQi = this.jingJiaModel.bdxX_GongShiRiQi;

      this.JingPaiShiJian = new Date(this.jingJiaModel.bdxX_JingPaiShiJian);
      this.BiaoDuanMiaoShu = this.jingJiaModel.bdxX_BiaoDuanMiaoShu;
      
      this.jiaoYiFangShi = this.jingJiaModel.bdxX_JiaoYiFangShi;
      console.log(this.jiaoYiFangShi)

     
      this.http.get(this.gongyingUrl + this.jjBianHao).subscribe(res => {
        this.gyxx = res['result'].gongYingXinXi;
        this.jingJiaFangShi = this.gyxx.jingJiaFangShi;
        console.log(this.jingJiaFangShi)
      })

    })
    //登录成功拿到用户id
    this.GetUsernameService.userId.subscribe(id => {
      // this.storage.userId = id
      this.userId = id
    })   

    //登录成功拿到用户名
    this.GetUsernameService.username.subscribe(user => {
      // this.storage.user = user;
      this.username = user});
      
    }
  Countdown(){
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
    this.http.get(this.baoMingGetAllUrl + this.id).subscribe(res=> {
      //通过projectId筛选得到某条报名信息
      this.baoMingXinXi = res['result'].items[0].baoMingXinXi;
      this.baoMingXinXiId = this.baoMingXinXi.id;
      this.baoMingXinXi.jiaGe = this.price;
      
      console.log(this.baoMingXinXi)

    //   let baojiaRequestBody={
    //     "projectID": this.jingJiaId,
    //     "userID": this.userId,
    //     "projectName": this.BiaoDuanMiaoShu,
    //     "xiangMuBianHao": this.bianHao,
    //     "createTime": this.GongShiRiQi,
    //     "userName": this.username,
    //     "projectType": 2,
    //     "jingJiaKaiShiShiJian":this.JingPaiShiJian,
    //     "jiaoYiFangShi": 0,
    //     "jingJiaFangShi": this.jingJiaFangShi,
    //     "status": 0,
    //     "shiFouZhongBiao": false,
    //     "jiaGe": this.price,
    //     "id": this.baoMingXinXiId,
    //   }
      this.http.post(this.baojiaUrl,this.baoMingXinXi).subscribe(res =>{
        if(res['success']){
          alert("你已经报价")
          console.log(this.obtn.nativeElement)

        }
      })
    })  
    
  }  
  getOnePrice(){
    this.now = moment().format('h:mm:ss')    
    this.price  = this.bidPrice
    this.http.get(this.baoMingGetAllUrl + this.id).subscribe(res=> {
      //通过projectId筛选得到某条报名信息
      this.baoMingXinXi = res['result'].items[0].baoMingXinXi;
      this.baoMingXinXiId = this.baoMingXinXi.id;
      this.baoMingXinXi.jiaGe = this.price;
      
      this.http.post(this.baojiaUrl,this.baoMingXinXi).subscribe(res =>{
        if(res['success']){
          alert("你已经报价")
          this.obtn.nativeElement.disabled = true
          console.log(this.obtn.nativeElement)
        }
      })
    })  
  } 
  getMaxPrice(){
    this.getPrice();
    let url ='http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetAll?ProjectTypeFilter=2&JiaoYiFangShiFilter=-1&JingJiaFangShiFilter=-1&StatusFilter=-1&ShiFouZhongBiaoFilter=-1&ProjectIDFilter='
    let baomingList;
    this.http.get(url + this.id).subscribe(res => {
      baomingList = res['result'].items;
      for( let i = 0 ; i < res['result'].totalCount; i++){
        if(baomingList[i]['baoMingXinXi'].jiaGe > this.maxPrice){
          this.maxPrice = baomingList[i]['baoMingXinXi'].jiaGe;          
        }
      }
      console.log(this.maxPrice)
    })
  }     
}


