import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetUsernameService } from 'src/app/model/get-username.service';
import * as g from '../../model/globals'
import { GongYingXinXies } from '../../model/Zrxx.model';

@Component({
  selector: 'app-my-auction',
  templateUrl: './my-auction.component.html',
  styleUrls: ['./my-auction.component.css']
})
export class MyAuctionComponent implements OnInit {

  constructor(private http: HttpClient, private getUser:GetUsernameService) { }
  public id;
  public userid: number;
  public myProject;
  public myProjectList = [];    //用户联系人
  public url = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetAll?UserIDFilter=';

  ngOnInit(): void {
    //通过服务获取用户id
    this.getUser.userId.subscribe(id => {this.userid = id})
  //   this.id = g.global.xiangMuID;
  //   this.http.get(this.url + this.id).subscribe((res) => {
  //     this.myProject = res['result']['gongYingXinXi'];
  //     this.myProjectList.push(this.myProject);

  //     console.log(this.myProjectList)
  // })
  this.http.get(this.url+this.userid).subscribe(res => {
    console.log(res)
    this.myProjectList = res['result'].items;
  })
}

}
