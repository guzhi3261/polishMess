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
  public url = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetAll?Filter=&ProjectTypeFilter=2&JiaoYiFangShiFilter=-1&JingJiaFangShiFilter=-1&StatusFilter=-1&ShiFouZhongBiaoFilter=-1&UserIDFilter=';

  ngOnInit(): void {
    //通过服务获取用户id
    this.getUser.userId.subscribe(id => {this.userid = id})
  //   this.id = g.global.xiangMuID;
  //   this.http.get(this.url + this.id).subscribe((res) => {
  //     this.myProject = res['result']['gongYingXinXi'];
  //     this.myProjectList.push(this.myProject);

  // })
  this.http.get(this.url + this.userid).subscribe(res => {
    this.myProjectList = res['result'].items;
  })
}
cancelSign(id,list){
  let deleteUrl = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/Delete?Id='
  this.http.delete(deleteUrl+id).subscribe(res=>{
    if(res['success']){
      list.splice(id,1)
      alert('您已经取消报名');
    }
  })

}


}
