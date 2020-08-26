import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';



@Component({
  selector: 'app-zcfg',
  templateUrl: './zcfg.component.html',
  styleUrls: ['./zcfg.component.css']
})
export class ZcfgComponent implements OnInit {
  public baseUrl = 'http://218.29.137.134:22742/api/services/app/ZhengCeFaGuies/GetAll';
  public policies: any = [];
  public policyTop: {} = {};



  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response)=>{
      this.policies = res['result']['items'];
      this.policyTop = this.policies[0];

    })
  }

}
