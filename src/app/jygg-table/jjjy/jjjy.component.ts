import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jjjy',
  templateUrl: './jjjy.component.html',
  styleUrls: ['./jjjy.component.css']
})
export class JjjyComponent implements OnInit {

  public url = 'http://218.29.137.134:22742/api/services/app/JingJiaModels/GetAll'
  public jjxxList
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((res)=> {
      this.jjxxList = res['result']['items']
    })
  }

}
