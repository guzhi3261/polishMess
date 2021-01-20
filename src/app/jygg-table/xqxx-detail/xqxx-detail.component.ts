import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUsernameService } from 'src/app/model/get-username.service';

@Component({
  selector: 'app-xqxx-detail',
  templateUrl: './xqxx-detail.component.html',
  styleUrls: ['./xqxx-detail.component.css']
})
export class XqxxDetailComponent implements OnInit {

  id;
  userId: number;
  user:string;
  isActive: boolean = false;
  xqxxList;
  xuqiufang: string;
  xiuqiumingcheng: string;
  phone: any;
  lianxiAddress: string;
  lianxirenzhengjianhaoma: string;
  zhengjianleixing: any;
  quyuweizhi: string;
  liuzhuanqishiriqi: string;
  xuqiunianxian: string;
  zhongzhiriqi: string;
  chengshoujiage: string;
  jiagedanwei: string;
  mianyi: any;
  dikuaimianji: string;
  dikuaidanwei: string;
  xiangmumingcheng: string;
  dikuaiyingjubeitiaojian: string;
  zhuanruyongtu: string;
  qita: string;
  dituiquyu: string ;
  photo: string;
  contentUrl = 'http://218.29.137.134:22742/api/services/app/XuQiuXinXies/GetXuQiuXinXiForEdit?Id=';
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
  constructor(
    private http:HttpClient, 
    protected activatedroute: ActivatedRoute, 
    private route: Router, 
    private GetUsernameService: GetUsernameService) { 
    this.id = this.activatedroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get(this.contentUrl + this.id).subscribe((res) => {
      this.xqxxList = res['result']['xuQiuXinXi'];
      this.xuqiufang = this.xqxxList.xuqiufang
      this.xiuqiumingcheng = this.xqxxList.xiuqiumingcheng
      this.xiangmumingcheng = this.xqxxList.xiangmumingcheng
      this.phone = this.xqxxList.phone;
      this.photo = this.addImageIp(this.xqxxList.photo);
      this.zhengjianleixing = this.xqxxList.zhengjianleixing
      this.lianxirenzhengjianhaoma = this.xqxxList.lianxirenzhengjianhaoma
      this.lianxiAddress = this.xqxxList.lianxiAddress
      this.quyuweizhi = this.xqxxList.quyuweizhi
      this.chengshoujiage = this.xqxxList.chengshoujiage
      this.xuqiunianxian = this.xqxxList.xuqiunianxian
      this.zhuanruyongtu = this.xqxxList.zhuanruyongtu
      this.dikuaimianji = this.xqxxList.dikuaimianji
      this.qita = this.xqxxList.qita;
      console.log(this.photo)
    })
  }

  submitUser(){
    //登录成功拿到用户id
    this.GetUsernameService.userId.subscribe(id => this.userId = id) 
    //登录成功拿到用户名
    this.GetUsernameService.username.subscribe(user => this.user = user);
      this.baoMingRequestBody = {

        'projectID': this.id,
        'userId': this.userId,
        'projectName': this.xiuqiumingcheng,
        'createTime': this.time.toISOString(),
        'userName': this.user,
        "projectType": 0,
        "status": 0,
        "jingJiaKaiShiShiJian": this.time.toISOString(),
        "jiaoYiFangShi": 0,
        "jingJiaFangShi": 0,
        "shiFouZhongBiao": true,
        "jiaGe": 0,

      }
      if(this.user){
        //整合用户名和供应id，创建一个报名信息
        this.http.post(this.baoMingRequestUrl,this.baoMingRequestBody).subscribe((res)=> {
          if(res['success']){
            alert("管理员已经收到您的反馈，近期将与您联系");
          }
        })
      }else{
        this.isActive =  this.isActive == true ? false: true;
      }
  }
  addImageIp(images0: string): string {
    if (images0) {
        let re = /@/gi;
        images0 = images0.replace(re, 'http://218.29.137.134:22742/'); //this.news.image.split(';');
         console.log('123' + images0);
         return images0;
    } else {
        console.log(123);
        return null;
    }
}

}
