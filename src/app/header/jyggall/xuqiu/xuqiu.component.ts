import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xuqiu',
  templateUrl: './xuqiu.component.html',
  styleUrls: ['./xuqiu.component.css']
})
export class XuqiuComponent implements OnInit {

  // public url = 'http://218.29.137.134:22742/api/services/app/XuQiuXinXies/GetAll?Filter=&xuqiufangFilter=-1&xiuqiumingchengFilter=&phoneFilter=&lianxiAddressFilter=&lianxirenzhengjianhaomaFilter=&quyuweizhiFilter=&xiangmumingchengFilter=&SkipCount=0&MaxResultCount=10'
  // public xuqiuList;
  // // public xuqiuList;
  // constructor(private http:HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get(this.url).subscribe((res:Response)=>{
  //     this.xuqiuList = res['result']['items']

  //   })
  // }
  public baseUrl = "http://218.29.137.134:22742/api/services/app/XuQiuXinXies/GetAll?xuqiufangFilter=-1&MaxResultCount=5";
  
  public xqxxList: any = [];
  public id: any ;
  public xuqiufang: any ;
  public type: any ;
  public chuangJianRiQi: any ;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.xqxxList = res['result']['items']  
      console.log(this.xqxxList[0].xuQiuXinXi.zhuanruyongtu)    
    })
  }

}
