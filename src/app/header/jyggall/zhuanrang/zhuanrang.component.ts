import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-zhuanrang',
  templateUrl: './zhuanrang.component.html',
  styleUrls: ['./zhuanrang.component.css']
})
export class ZhuanrangComponent implements OnInit {

 
  public baseUrl = "http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetAll?ZhuanChuFangLeiXingFilter=-1&MaxResultCount=5";
  public zrxx: any = [];
  public zrxxList: any = [];
  public id: any ;
  public xiangMuMingCheng: any ;
  public faBuQuYu: any ;
  public chuangJianRiQi: any ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.zrxx = res['result']['items']      
    })
  }

}
