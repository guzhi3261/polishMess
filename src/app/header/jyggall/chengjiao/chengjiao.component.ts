import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chengjiao',
  templateUrl: './chengjiao.component.html',
  styleUrls: ['./chengjiao.component.css']
})
export class ChengjiaoComponent implements OnInit {

  public baseUrl = "http://218.29.137.134:22742/api/services/app/ChengJiaoXinXies/GetAll?Filter=&XiangMuMingChengFilter=&LiuZhuanFangShiFilter=-1&JiaoYiFangShiFilter=-1&BiaoDiQuYuFilter=&ZhuanChuFangFilter=&ShouRangFangFilter=&StatusFilter=9&SkipCount=0";
  public cjxx: any = [];
  public cjxxList: any = [];
  public id: any ;
  public xiangMuMingCheng: any ;
  public biaoDiQuYu: any ;
  public chengJiaoShiJian: any ;
  totalRecords: any;
  cols: { field: string; header: string; }[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.cjxx = res['result']['items'];   
      this.totalRecords = res["result"].totalCount;
    })
    this.cols = [
      {field: 'author', header: '项目名称' },
      { field: 'name', header: '成交价格' },
      { field: 'price', header: '项目地点' },   
      { field: 'price', header: '交易面积' }  ,    
      { field: 'price', header: '交易日期' }  ,    
  ];
  }

}
