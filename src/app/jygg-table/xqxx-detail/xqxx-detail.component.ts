import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-xqxx-detail',
  templateUrl: './xqxx-detail.component.html',
  styleUrls: ['./xqxx-detail.component.css']
})
export class XqxxDetailComponent implements OnInit {

  id;
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
  constructor(private http:HttpClient, protected activatedroute: ActivatedRoute, private route: Router) { 
    this.id = this.activatedroute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.http.get(this.contentUrl + this.id).subscribe((res) => {
      this.xqxxList = res['result']['xuQiuXinXi'];
      this.xuqiufang = this.xqxxList.xuqiufang
      this.xiuqiumingcheng = this.xqxxList.xiuqiumingcheng
      this.phone = this.xqxxList.phone
      this.zhengjianleixing = this.xqxxList.zhengjianleixing
      this.lianxirenzhengjianhaoma = this.xqxxList.lianxirenzhengjianhaoma
      this.lianxiAddress = this.xqxxList.lianxiAddress
      this.quyuweizhi = this.xqxxList.quyuweizhi
      this.chengshoujiage = this.xqxxList.chengshoujiage
      this.xuqiunianxian = this.xqxxList.xuqiunianxian
      this.zhuanruyongtu = this.xqxxList.zhuanruyongtu
      this.dikuaimianji = this.xqxxList.dikuaimianji
      this.qita = this.xqxxList.qita
    })
  }

  submitUser(){
  }

}
