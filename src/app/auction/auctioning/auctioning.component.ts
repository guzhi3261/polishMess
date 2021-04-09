import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  
  baoMingGetForEdit = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetBaoMingXinXiForEdit?Id='

  jingjiaUrl = 'http://218.29.137.134:22742/api/services/app/JingJiaModels/GetJingJiaModelForEdit?Id=';
  gongyingUrl = 'http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetGongYingXinXiForEdit?Id=';

  baojiaUrl = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/CreateOrEdit';
  value: number = 0;
  now    
  // now = new Date()    
  bidPrice;
  // bidPrice;
  maxPrice = 0;
  remainTime;
  serveTime;
  username;
  userId;
  id;
  //最终
  endPrice;
  endUser;
  tongjiList;
  //用到的报名信息
  baoMingGetAllUrl = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetAll?ProjectTypeFilter=2&JiaoYiFangShiFilter=-1&JingJiaFangShiFilter=-1&StatusFilter=-1&ShiFouZhongBiaoFilter=-1&ProjectIDFilter='
 getTimeUrl = 'http://218.29.137.134:22742/api/services/app/JingJiaModels/GetJingJiaTime?id='
  baoMingXinXi;
  baoMingXinXiId;
  //用到的jingjiaModel信息
  public jingJiaModel: any;
  public projectName: any;
  public jingJiaModelId: string;
  // public BiaoDuanMiaoShu: string; // 项目名称
  public bianHao: string; // 项目编号
  // public GongShiRiQi; 
  public JingPaiShiJian; 
  public DiJia; 
  
  public jjBianHao; //供应信息的id

  //用到的gongying信息
  gyxx;
  public jingJiaFangShi;
  public jiaoYiFangShi;
  //倒数时间
  remain;
  days;
  hours;
  minutes;
  seconds;
  //路由到当前页面
  navigationSubscription

  
  
  @ViewChild('oneButton') obtn: ElementRef;
  constructor(protected activatedroute: ActivatedRoute, 
    private GetUsernameService: GetUsernameService,
    private http:HttpClient,
    private route:Router,
    private elementRef: ElementRef,
    private zone : NgZone) { 
    this.id = this.activatedroute.snapshot.params['id'];//project
   this.username  = localStorage.getItem("user");
   this.userId  = localStorage.getItem("userId");
   this.now = moment().format('YYYY-MM-DD HH:mm:ss');
  //  this.navigationSubscription = this.route.events.subscribe((event:any) => {
  //    if(event instanceof NavigationEnd){
      
  //    }
  //  })
  }
  public numbers = interval(1000); // 设置一个计时器
  public takeFourNumbers ;
      
  ngOnInit(): void {
    //登录成功拿到用户id
    this.GetUsernameService.userId.subscribe(id => {
      // this.storage.userId = id
      this.userId = id
    })   

    //登录成功拿到用户名
    this.GetUsernameService.username.subscribe(user => {
      // this.storage.user = user;
      this.username = user
    });

    //获取竞价信息，分类别显示
    this.http.get(this.jingjiaUrl+this.id).subscribe(res => {
      this.jingJiaModel = res['result'].jingJiaModel;
      this.jingJiaModelId = this.jingJiaModel.id;
      
      this.bianHao = this.jingJiaModel.xiangMuBianHao;
      this.jjBianHao = this.jingJiaModel.bdxX_BiaoDuanBianHao;
      // this.GongShiRiQi = this.jingJiaModel.bdxX_GongShiRiQi;
      this.DiJia = this.jingJiaModel.bdxX_DiJia;
      

      this.JingPaiShiJian = this.jingJiaModel.bdxX_JingPaiShiJian;
      // this.JingPaiShiJian = new Date(this.jingJiaModel.bdxX_JingPaiShiJian);
      // this.BiaoDuanMiaoShu = this.jingJiaModel.bdxX_BiaoDuanMiaoShu;  
      this.http.get(this.getTimeUrl+this.jingJiaModelId).subscribe( res => {
        this.serveTime =  res['result']
        console.log(this.serveTime)        
        this.takeFourNumbers = this.numbers.pipe(take(1800-this.serveTime))
         // 页面进度条
        this.Countdown()
      })
      

    })
            
       
    //判断用户是否已经报过价，如果报过则跳转首页
    let url = this.baoMingGetAllUrl + this.id+'&UserIDFilter='+this.userId
    this.http.get(this.baoMingGetAllUrl + this.id+'&UserIDFilter='+this.userId).subscribe(res=> {
      //通过projectId筛选得到某条报名信息
      this.baoMingXinXi = res['result'].items[0].baoMingXinXi;
      this.baoMingXinXiId = this.baoMingXinXi.id;
      this.jingJiaFangShi = this.baoMingXinXi.jingJiaFangShi;
      this.jiaoYiFangShi = this.baoMingXinXi.jiaoYiFangShi;
      this.projectName = this.baoMingXinXi.projectName;      
            
      if(this.baoMingXinXi.jiaGe != 0){
        alert("您已经报过价了，请等待结果")
        this.route.navigate(['/auction/myAuction'])
      }
    })
    
    

    
    
    }
    
  Countdown(){
    //进度条计时器
    this.value = Math.floor(this.serveTime/18);
    let interval = setInterval(() => {
    //每隔2秒随机一个value,value随机加一个1-11的数，加到100，进度条走完
    this.value = this.value + 1;

    // this.getMaxPrice() 
    this.getServeMaxPrice()
    //计时器结束以后的动作放这里    
    if (this.value >= 100) {
        this.value = 100;
        if(this.jiaoYiFangShi == 0){
          this.defineBid()
        }
        this.route.navigate(['/auction/myAuction'])
        clearInterval(interval);
    }
  }, 18000);   
  
  // this.getPrice();   

  //页面倒计时
  this.takeFourNumbers.subscribe(
    x => {
      //计算竞价倒数时间,计时结束进入竞价 
      this.days =  Math.floor((~this.serveTime-x)/3600/24);
      this.hours = Math.floor((~this.serveTime-x)/3600%24);
      this.minutes = Math.floor((~this.serveTime-x)/60%60);
      this.seconds = (~this.serveTime-x)%60;
      if(this.days == 0 && this.hours == 0 && this.minutes ==0 && this.seconds == 0 ){
        // this.route.onSameUrlNavigation = 'reload'
        // this.route.navigate(['auction','auctioning'],{ queryParams: { id: this.id } })
        this.http.get(this.getTimeUrl+this.jingJiaModelId).subscribe( res => {
          this.serveTime =  res['result']          
          this.takeFourNumbers = this.numbers.pipe(take(1800-this.serveTime))
           // 页面进度条
          this.Countdown()
        })
      }
      this.remainTime = Math.floor((1800-this.serveTime-x)/60)+" 分钟"+((1800-this.serveTime-x)%60)+"秒后结束竞拍！";
    },
    error => {},
    () => {
      this.remainTime = "竞拍结束！";
    });  
  //倒计时结束
  }
  getPrice(){    
    
    //1.判断是正向还是反向；2.判断报价是否低于（高于）项目底价；3.判断报价是否低于（高于）当前最高（低）价；4.报价
    if(this.jingJiaFangShi == 0){ //正向报价
      if(this.bidPrice < this.DiJia){
        alert("您的报价不能低于本项目规定的底价，请重新报价")
      }else{
        this.getServeMaxPrice();
        if(this.bidPrice < this.endPrice){
          alert ("您的报价不能低于当前最高价，请重新报价")
        }else{
          this.baoMingXinXi.jiaGe = this.bidPrice; 
          this.http.post(this.baojiaUrl,this.baoMingXinXi).subscribe(res =>{
          this.setPrice();
          this.getServeMaxPrice();
          })
        }

      }
    }else{ //反向报价
      if(this.bidPrice > this.DiJia){
        alert("您的报价不能高于本项目给出的底价，请重新报价")
      }else{
        this.getServeMaxPrice();
        if(this.bidPrice > this.endPrice){
          alert ("您的报价不能高于当前最低价，请重新报价")
        }else{
          this.baoMingXinXi.jiaGe = this.bidPrice; 
          this.http.post(this.baojiaUrl,this.baoMingXinXi).subscribe(res =>{
          this.setPrice();
          this.getServeMaxPrice();
          })
        }

      }
    }     
    
  }  
  // 新增报价，为了记录报价信息
  setPrice(){    
    let  quoted = {
      "baoMingXinXieID": this.baoMingXinXiId,
      "projectName": this.projectName,
      "xiangMuBianHao": this.bianHao,
      "jiaGe": this.bidPrice,
      "chuJiaShiJian": this.now,
      "userID": this.userId,
      "userName": this.username,        
    }
    let baojia2Url = "http://218.29.137.134:22742/api/services/app/BaoJias/CreateOrEdit"
    this.http.post(baojia2Url,quoted).subscribe(res => {
      if(res['success']){
      }
    })
  }
//获取当前最优报价
  getServeMaxPrice(){
    let currentUrl='http://218.29.137.134:22742/api/services/app/BaoJias/getCurrentPrice?xiangmubianhao='+this.bianHao+'&userid='+this.userId+'&style='+this.jingJiaFangShi
    this.http.get(currentUrl).subscribe( res =>{

      this.endPrice = res['result'].price;       
      this.endUser = res['result'].username;     
      this.tongjiList = res['result'].tongji;
     
    })
    return this.endPrice,this.endUser
  }

  //修改最优报价的中标状态
  defineBid(){
     //根据用户名和项目锁定要改是否中标的报名信息
    //  let defineBidUrl = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetAll?UserIDFilter='+this.username+'&ProjectNameFilter='+this.projectName
    //  this.http.get(defineBidUrl).subscribe(res=> {
      
    //   this.baoMingXinXi = res['result'].items[0].baoMingXinXi;
      //判断是否中标
      let currentUrl='http://218.29.137.134:22742/api/services/app/BaoJias/getCurrentPrice?xiangmubianhao='+this.bianHao+'&userid='+this.userId+'&style='+this.jingJiaFangShi
      this.http.get(currentUrl).subscribe( res =>{

      this.endPrice = res['result'].price;       
      this.endUser = res['result'].username;     
      this.tongjiList = res['result'].tongji;
      if(this.username == this.endUser){
        this.baoMingXinXi.jiaGe = this.endPrice;
        this.baoMingXinXi.shiFouZhongBiao = true;           
        this.http.post(this.baojiaUrl,this.baoMingXinXi).subscribe(res =>{       
                  
        })
      }
     
    })
      // this.getServeMaxPrice()
      if(this.username==this.endUser){
        this.baoMingXinXi.shiFouZhongBiao = true;           
        this.http.post(this.baojiaUrl,this.baoMingXinXi).subscribe(res =>{       
                  console.log(res)
        })
      }
    // })
  }
  getOnePrice(){           
    this.http.get(this.baoMingGetAllUrl + this.id).subscribe(res=> {
      //通过projectId筛选得到某条报名信息
      this.baoMingXinXi = res['result'].items[0].baoMingXinXi;
      this.baoMingXinXiId = this.baoMingXinXi.id;
      
      this.baoMingXinXi.jiaGe = this.bidPrice;      
      
      this.http.post(this.baojiaUrl,this.baoMingXinXi).subscribe(res =>{
        if(res['success']){
          this.defineBid()
          this.obtn.nativeElement.disabled = true;
          alert("你已经报价，网页即将跳转")
          setTimeout(() => {            
            this.route.navigate(['/home'])
          }, 3000);
        }
      })
    })
    
  } 
//   getMaxPrice(){
//     // this.getPrice();
//     let url ='http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetAll?ProjectTypeFilter=2&JiaoYiFangShiFilter=-1&JingJiaFangShiFilter=-1&StatusFilter=-1&ShiFouZhongBiaoFilter=-1&ProjectIDFilter='
//     let baomingList;
//     this.http.get(url + this.id).subscribe(res => {
//       baomingList = res['result'].items;
//       for( let i = 0 ; i < res['result'].totalCount; i++){
//         if(baomingList[i]['baoMingXinXi'].jiaGe > this.maxPrice){
//           this.maxPrice = baomingList[i]['baoMingXinXi'].jiaGe;          
//         }
//       }
//     })
//   }     
}

