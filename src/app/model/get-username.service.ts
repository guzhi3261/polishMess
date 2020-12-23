import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsernameService {

  public username = new BehaviorSubject<string>('')
  public userId = new BehaviorSubject<number>(0)
  constructor() { }
  getUser(name: string, id: number){
    this.username.next(name);
    this.userId.next(id);

  }
}
