import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { News } from 'src/app/model/News.model';
import * as g from '../../../model/globals'

@Component({
  selector: 'app-ask-service',
  templateUrl: './ask-service.component.html',
  styleUrls: ['./ask-service.component.css']
})
export class AskServiceComponent implements OnInit {
  public time = new Date()

  hdjlForm= new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    createTime: new FormControl(this.time.toISOString()),
    userName: new FormControl(),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    postCode: new FormControl(''),
    qestionType: new FormControl(''),
    id: new FormControl(''),
    // createTime: 
  })
  public baseUrl = 'http://218.29.137.134:22742/api/services/app/Questions/CreateOrEdit'
  

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    console.log(g.global.userName);
  }
  save(){
    // this.http.post(this.baseUrl,this.hdjlForm.value).subscribe(res => {
    //   if(res['success']){
    //     alert('您已经成功报名！')
    //   }else{
    //     alert('发生未知错误，请重试！')
    //   }
    // })
    this.hdjlForm.reset();
    alert("您已经提交，请持续关注本页面等待管理员回复哟~")
    console.log(this.hdjlForm.value)
  }
}
