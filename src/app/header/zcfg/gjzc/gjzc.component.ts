import { Component, OnInit } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';


@Component({
  selector: 'app-gjzc',
  templateUrl: './gjzc.component.html',
  styleUrls: ['./gjzc.component.css']
})
export class GjzcComponent implements OnInit {

  public baseUrl = 'http://218.29.137.134:22742/api/services/app/ZhengCeFaGuies/GetAll?Filter=&TitleFilter=&contentFilter=&authorFilter=&imageFilter=&AtTopFilter=-1&ZhengCeFaGuiTypeZhengCeFaGuiTypeTitleFilter=%E5%9B%BD%E5%AE%B6';
  public policies: any = [];
  public policyTop: {} = {};



  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response)=>{
      this.policies = res['result']['items'].reverse();
      this.policyTop = this.policies[0];

    })
  }

}
