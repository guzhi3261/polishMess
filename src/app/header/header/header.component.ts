import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetUsernameService } from 'src/app/model/get-username.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user=""
  public sucription: Subscription;

  constructor(private getUser: GetUsernameService) { 
    this.getUser.username.subscribe(user => this.user = user);
    
  }

  ngOnInit(): void {
  }

}
