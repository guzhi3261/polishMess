import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chengjiao',
  templateUrl: './chengjiao.component.html',
  styleUrls: ['./chengjiao.component.css']
})
export class ChengjiaoComponent implements OnInit {

  public baseUrl = "http://218.29.137.134:22742/api/services/app/ChengJiaoXinXies/GetAll?LiuZhuanFangShiFilter=-1&MaxResultCount=500";
  public cjxx: any = [];
  public cjxxList: any = [];
  public id: any ;
  public xiangMuMingCheng: any ;
  public biaoDiQuYu: any ;
  public chengJiaoShiJian: any ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.cjxx = res['result']['items'].reverse();   
    })
  }

}
