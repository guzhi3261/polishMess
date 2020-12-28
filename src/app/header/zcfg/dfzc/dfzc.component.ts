import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';


@Component({
  selector: 'app-dfzc',
  templateUrl: './dfzc.component.html',
  styleUrls: ['./dfzc.component.css']
})
export class DfzcComponent implements OnInit {

  public baseUrl = 'http://218.29.137.134:22742/api/services/app/ZhengCeFaGuies/GetAll?Filter=&TitleFilter=&contentFilter=&authorFilter=&imageFilter=&AtTopFilter=-1&ZhengCeFaGuiTypeZhengCeFaGuiTypeTitleFilter=%E5%9C%B0%E6%96%B9&SkipCount=0&MaxResultCount=100';
  public policies: any = [];
  public policyTop: {} = {};



  totalRecords;



  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response)=>{
      this.policies = res['result']['items'];
      this.policyTop = this.policies[0];
      this.totalRecords = res["result"].totalCount;

    })
  }

}
