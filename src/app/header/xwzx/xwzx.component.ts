import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-xwzx',
  templateUrl: './xwzx.component.html',
  styleUrls: ['./xwzx.component.css']
})
export class XwzxComponent implements OnInit {
  public newses: any = [];
  public newsTop: {} = {};
  public baseUrl: any = 'http://218.29.137.134:22742/api/services/app/Newses/GetAll';

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    // 请求数据
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.newses = res['result']['items'];
      this.newsTop = this.newses[0];
      console.log(this.newses);
  });

  
  }

}
