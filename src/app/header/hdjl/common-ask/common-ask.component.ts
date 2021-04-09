import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-ask',
  templateUrl: './common-ask.component.html',
  styleUrls: ['./common-ask.component.css']
})
export class CommonAskComponent implements OnInit {

  constructor(private http:HttpClient) { }
  replayList ;
  public answerGetAllUrl = 'http://218.29.137.134:22742/api/services/app/Answers/GetAll'

  ngOnInit(): void {
    this.http.get(this.answerGetAllUrl).subscribe( res => {
      this.replayList = res['result'].items;
    })
  }

}
