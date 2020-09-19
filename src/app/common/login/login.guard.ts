import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginGuard implements CanActivate{
    token;
    constructor(
        public cookies: CookieService,
        private router: Router

    ){}

    canActivate(){
        this.token = this.cookies.get("accessToken") 
        if(!this.token){
            this.router.navigate(['/login'])
            alert("登陆已过期")
        }
        return true;
    }
}