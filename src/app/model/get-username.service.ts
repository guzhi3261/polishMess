import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsernameService {

  public username = new BehaviorSubject<string>('')
  constructor() { }
  getUser(name: string){
    this.username.next(name);
  }
}
