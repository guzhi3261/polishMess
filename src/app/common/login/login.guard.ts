import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginGuard implements CanActivate{
    token;
    currentUrl;
    constructor(
        public cookies: CookieService,
        private router: Router,
        private activatedRoute: ActivatedRoute

    ){}

    canActivate(){
        this.token = this.cookies.get("accessToken") 
        this.currentUrl = this.router.url;
        // console.log(this.currentUrl == '/login')
        if(this.currentUrl == '/login' || this.currentUrl == '/'){
            return true;
        } else {
            if(!this.token){
                this.router.navigate(['/auction/myAuction'])
                alert("登陆已过期")
            }
            return true;
        }      
        
    }
}