import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jingjia',
  templateUrl: './jingjia.component.html',
  styleUrls: ['./jingjia.component.css']
})
export class JingjiaComponent implements OnInit {
  public displayLogin: boolean;
  public displaySignIn: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  showLoginDialog() {
    this.displayLogin = true;
    this.displaySignIn = false;
   
}
displaySignInDialog(){
  this.displayLogin = false;
  this.displaySignIn = true;
}

}
