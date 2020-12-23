import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng';


@Component({
  selector: 'app-xwzx',
  templateUrl: './xwzx.component.html',
  styleUrls: ['./xwzx.component.css']
})
export class XwzxComponent implements OnInit {
  public newses: any = [];
  public newsTop: {} = {};
  public baseUrl: any = 'http://218.29.137.134:22742/api/services/app/Newses/GetAll';

  constructor( private http: HttpClient, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    // 请求数据
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.newses = res['result']['items'].reverse();
      this.newsTop = this.newses[0];
      console.log(this.newses);
  });
  this.primengConfig.ripple = true;


  
  }

}
