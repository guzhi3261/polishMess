import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseUrl="http://218.29.137.134:22742/api/TokenAuth/Authenticate";
  public userName: string;
  public pwd: string;
  public requestBody: object;
  public httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  public accessToken: string;
  public time: number = 2*60*60*1000;// cookie过期时间两个小时 2*60*60*1000
  
  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    ) {  
  }

  ngOnInit(): void {
  }

  login(){
    this.requestBody = {
      "userNameOrEmailAddress": this.userName,
      "password": this.pwd,
      "twoFactorVerificationCode": "string",
      "rememberClient": true,
      "twoFactorRememberClientToken": "string",
      "singleSignIn": true,
      "returnUrl": "string",
      "captchaResponse": "string"
    }
    this.http.post(this.baseUrl,this.requestBody,this.httpOptions).subscribe((res: Response)=>{
      this.accessToken = res['result'].accessToken;
      this.cookies.set("accessToken",this.accessToken,new Date(new Date().getTime() + this.time))

      console.log(res)
    })    
  }

}
