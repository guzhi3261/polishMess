import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-zhuanrang',
  templateUrl: './zhuanrang.component.html',
  styleUrls: ['./zhuanrang.component.css']
})
export class ZhuanrangComponent implements OnInit {

 
  // public baseUrl = "http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetAll?ZhuanChuFangLeiXingFilter=-1&MaxResultCount=100";
  public baseUrl = "http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetAll?ZhuanChuFangLeiXingFilter=-1&JiaoYiFangShiFilter=4&ZaiCiZhuanChuFangShiFilter=-1&DiLeiTypeFilter=-1&StatusFilter=3"

  public zrxx: any = [];
  public zrxxList: any = [];
  public id: any ;
  public xiangMuMingCheng: any ;
  public faBuQuYu: any ;
  public chuangJianRiQi: any ;
  cols: { field: string; header: string; }[];
  totalRecords: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.zrxx = res['result']['items'];
      console.log(this.zrxx);
      this.totalRecords = res["result"].totalCount;
    })
    this.cols = [
      { field: 'name', header: '项目名称' },
      { field: 'price', header: '项目编号' },      
      {field: 'author', header: '挂牌价格' },
      { field: 'price', header: '发布区域' },   
      { field: 'price', header: '登记日期' }      
  ];
  }

}
