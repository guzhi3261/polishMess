import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xqxx-detail',
  templateUrl: './xqxx-detail.component.html',
  styleUrls: ['./xqxx-detail.component.css']
})
export class XqxxDetailComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  submitUser(){
    

  }

}
