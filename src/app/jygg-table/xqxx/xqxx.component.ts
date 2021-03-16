import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-xqxx',
  templateUrl: './xqxx.component.html',
  styleUrls: ['./xqxx.component.css']
})
export class XqxxComponent implements OnInit {

  public baseUrl = "http://218.29.137.134:22742/api/services/app/XuQiuXinXies/GetAll?xuqiufangFilter=-1&DiLeiTypeFilter=-1&StatusFilter=3&MaxResultCount=4";
  
  public xqxxList: any = [];
  public id: any ;
  public xuqiufang: any ;
  public type: any ;
  public chuangJianRiQi: any ;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.xqxxList = res['result']['items'];
    })
  }
  
}
