import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cjgg',
  templateUrl: './cjgg.component.html',
  styleUrls: ['./cjgg.component.css']
})
export class CjggComponent implements OnInit {

  public baseUrl = "http://218.29.137.134:22742/api/services/app/ChengJiaoXinXies/GetAll?LiuZhuanFangShiFilter=-1&MaxResultCount=100";
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
