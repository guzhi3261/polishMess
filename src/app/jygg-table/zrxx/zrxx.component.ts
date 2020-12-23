import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zrxx } from '../../model/Zrxx.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-zrxx',
  templateUrl: './zrxx.component.html',
  styleUrls: ['./zrxx.component.css']
})
export class ZrxxComponent implements OnInit {

  public baseUrl = "http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetAll?ZhuanChuFangLeiXingFilter=-1&MaxResultCount=5";
  public zrxx: any = [];
  public zrxxList: any = [];
  public gyxx: Zrxx[];
  public id: any ;
  public xiangMuMingCheng: any ;
  public faBuQuYu: any ;
  public chuangJianRiQi: any ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.zrxx = res['result']['items'].reverse();  
    })
  }
  

}
