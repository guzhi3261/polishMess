import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as g from '../../model/globals'
import { GongYingXinXies } from '../../model/Zrxx.model';

@Component({
  selector: 'app-my-auction',
  templateUrl: './my-auction.component.html',
  styleUrls: ['./my-auction.component.css']
})
export class MyAuctionComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public id;
  public myProject;
  private myProjectList:Array<GongYingXinXies> = [];    //用户联系人
  public url = 'http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetGongYingXinXiForEdit?Id=';

  ngOnInit(): void {
    this.id = g.global.xiangMuID;
    this.http.get(this.url + this.id).subscribe((res) => {
      this.myProject = res['result']['gongYingXinXi'];
      this.myProjectList.push(this.myProject);
      console.log(this.myProjectList)
  })
}

}
