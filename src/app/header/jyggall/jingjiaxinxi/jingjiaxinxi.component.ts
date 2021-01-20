import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jingjiaxinxi',
  templateUrl: './jingjiaxinxi.component.html',
  styleUrls: ['./jingjiaxinxi.component.css']
})
export class JingjiaxinxiComponent implements OnInit {
  public url = 'http://218.29.137.134:22742/api/services/app/JingJiaModels/GetAll?Filter=&BDXX_JiaoYiFangShiFilter=-1&CQXX_ShiFouXuZuFilter=-1&StatusFilter=3&SkipCount=0';
  public jingjiaList ; 
  cols: { field: string; header: string; }[];
  totalRecords: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe( res => {
      this.jingjiaList = res['result']['items'];
      this.totalRecords = res["result"].totalCount;
    })
    this.cols = [
      { field: 'name', header: '项目编号' },
      {field: 'author', header: '项目名称' },
      { field: 'price', header: '底价' },   
      { field: 'price', header: '公示日期' }  ,    
  ];
    
  }

}
