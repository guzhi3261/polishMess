import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  baseUrl = 'http://218.29.137.134:22742/api/services/app/User/CreateOrUpdateUser';
  public requestBody: object;
  public httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  public email: string;
  public name: string;
  public userName: string;
  public psw: string;
  public pswAgain: string;
  public cardId: string;
  public area: string;
  public phoneNum: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  register() {
    this.requestBody = {
      "user": {
        "id": 0,
        "name": this.name,
        "surname": this.cardId,
        "userName": this.userName,
        "emailAddress": this.email,
        "phoneNumber": this.phoneNum,
        "password": this.psw,
        "isActive": true,
        "shouldChangePasswordOnNextLogin": false,
        "isTwoFactorEnabled": false,
        "isLockoutEnabled": true
      },
      "assignedRoleNames": [
        "User"
      ],
      "sendActivationEmail": false,
      "setRandomPassword": false,
      "organizationUnits": [
        0
      ]
    };
    this.http.post(this.baseUrl, this.requestBody, this.httpOptions).subscribe((res) => {
      if (res[ 'success']) {
        alert("注册成功，请登录");
        this.router.navigate(['/login']);
      } else {
        alert("出现未知错误，请重试");
      }

    })
  }
}
