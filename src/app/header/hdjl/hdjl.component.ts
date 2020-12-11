import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hdjl',
  templateUrl: './hdjl.component.html',
  styleUrls: ['./hdjl.component.css']
})
export class HdjlComponent implements OnInit {

  
  constructor(private http: HttpClient){ }

  ngOnInit(): void {
  }
  
}
