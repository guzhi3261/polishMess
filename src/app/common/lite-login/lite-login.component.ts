import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { GetUsernameService } from 'src/app/model/get-username.service';
import * as g from '../../model/globals'


@Component({
  selector: 'app-lite-login',
  templateUrl: './lite-login.component.html',
  styleUrls: ['./lite-login.component.css']
})
export class LiteLoginComponent implements OnInit {
  
  // @Output() user = new EventEmitter()
  user;
  isActive:boolean =false;
  loginForm= new FormGroup({
    userNameOrEmailAddress: new FormControl(''),
    password: new FormControl(''),    
    twoFactorVerificationCode: new FormControl(''),    
    rememberClient: new FormControl(true),    
    twoFactorRememberClientToken: new FormControl(''),    
    singleSignIn: new FormControl(true),    
    returnUrl: new FormControl(''),    
    captchaResponse: new FormControl(''),    
  });
  
  public baseUrl = 'http://218.29.137.134:22742/api/TokenAuth/Authenticate';
  public accessToken: string;
  public time: number = 2 * 60 * 60 * 1000; // cookie过期时间两个小时 2*60*60*1000


  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private router: Router,
    private getUser:GetUsernameService,
  ) { }

  ngOnInit(): void {
  }
close(){
  this.isActive=true;
  console.log("close");
}
submit(){
  console.log(this.loginForm.value)
  if(this.accessToken){
    this.user = this.loginForm.value.userNameOrEmailAddress;
    this.getUser.getUser(this.user);
    //TODO: 供应报名人信息发送到后台
   
  }else {
    this.http.post(this.baseUrl,this.loginForm.value).subscribe( res =>{
      this.accessToken = res['result'].accessToken;
        this.cookies.set("accessToken",this.accessToken,new Date(new Date().getTime() + this.time))  
        // this.router.navigate(['/auction'])  ;
        this.getUser.getUser(this.loginForm.value.userNameOrEmailAddress) 
        // console.log(this.user);
  
    },
    error =>{
      alert("用户名或密码不正确！")
    });
  }
  this.isActive = true;
}
}
