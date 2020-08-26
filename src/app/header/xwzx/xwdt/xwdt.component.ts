import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-xwdt',
  templateUrl: './xwdt.component.html',
  styleUrls: ['./xwdt.component.css']
})
export class XwdtComponent implements OnInit {
  public newses: any = [];
  public newsTop: {} = {};
  public baseUrl: any = 'http://218.29.137.134:22742/api/services/app/Newses/GetAll??Filter=&NewsTypeNewsTypeTitleFilter=%E6%96%87%E5%AD%97%E6%96%B0%E9%97%BB'


  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.http.get(this.baseUrl) .subscribe((res: Response) => {
      this.newses = res['result']['items'];
      this.newsTop = this.newses[0];
  })

}
}
