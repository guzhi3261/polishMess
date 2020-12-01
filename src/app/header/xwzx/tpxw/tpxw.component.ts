import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tpxw',
  templateUrl: './tpxw.component.html',
  styleUrls: ['./tpxw.component.css']
})
export class TpxwComponent implements OnInit {
  public newses: any = [];
  public newsTop: {} = {};
  public baseUrl: any = 'http://218.29.137.134:22742/api/services/app/Newses/GetAll?Filter=&TitleFilter=&contentFilter=&authorFilter=&imageFilter=&AtTopFilter=-1&NewsTypeNewsTypeTitleFilter=%E5%9B%BE%E7%89%87%E6%96%B0%E9%97%BB&SkipCount=0&MaxResultCount=100';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // 请求数据
    this.http.get(this.baseUrl) .subscribe((res: Response) => {
      this.newses = res['result']['items'];
      this.newsTop = this.newses[0];
  })
}
  
}
