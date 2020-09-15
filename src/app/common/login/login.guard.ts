import { CanActivate } from '@angular/router';

export class LoginGuard implements CanActivate{
    canActivate(){
        let loggedIn :boolean 
        if(!loggedIn){
            alert("用户未登陆")
        }
        return loggedIn;
    }
}