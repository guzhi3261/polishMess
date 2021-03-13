import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { GetUsernameService } from '../../model/get-username.service';
import { Observable,  } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseUrl = 'http://218.29.137.134:22742/api/TokenAuth/Authenticate';
  public userName: string;
  public userId: number;
  public pwd: string;
  public requestBody: object;
  public httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  public accessToken: string;
  public time: number = 2 * 60 * 60 * 1000; // cookie过期时间两个小时 2*60*60*1000
  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private router: Router,
    private getUser: GetUsernameService
    ) {  
  }
   
  ngOnInit(): void {
  }
  login() {
    this.requestBody = {
      'userNameOrEmailAddress': this.userName,
      'password': this.pwd,
      'twoFactorVerificationCode': 'string',
      'rememberClient': true,
      'twoFactorRememberClientToken': 'string',
      'singleSignIn': true,
      'returnUrl': 'string',
      'captchaResponse': 'string'
    }
    this.http.post(this.baseUrl,this.requestBody,this.httpOptions).subscribe((res: Response)=>{
      this.accessToken = res['result'].accessToken;
      this.userId = res['result'].userId;
      this.cookies.set("accessToken",this.accessToken,new Date(new Date().getTime() + this.time))  
      //通过getUser服务将用户名和用户id保存，用于获取用户报名信息
      this.getUser.getUser(this.userName,this.userId);
      //进入竞价路由
      this.router.navigate(['/auction/myAuction'])   
      console.log(res)
    },
    error=>{
      alert('用户名或密码不正确');
    })    
     
    }

   
  }


