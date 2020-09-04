import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zrxx } from '../../model/Zrxx.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-zrxx',
  templateUrl: './zrxx.component.html',
  styleUrls: ['./zrxx.component.css']
})
export class ZrxxComponent implements OnInit {

  public baseUrl = "";
  public Zrxx: Zrxx[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.Zrxx = this.getZrxxes()
  }
  getZrxxes(): Observable<Zrxx[]> {
    return this.http.get<Zrxx[]>(this.baseUrl);
  }

}
