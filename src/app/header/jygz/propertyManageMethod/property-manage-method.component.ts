import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-manage-method',
  templateUrl: './property-manage-method.component.html',
})
export class PropertyManageMethodComponent implements OnInit {
   
  public url:string = 'http://218.29.137.134:22742/api/services/app/JiaoYiGuiZees/GetAll'
  public jygz: [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.jygz = res['result']['items']

    })
  }

}
