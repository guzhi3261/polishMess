import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hdjl',
  templateUrl: './hdjl.component.html',
  styleUrls: ['./hdjl.component.css']
})
export class HdjlComponent implements OnInit {

  hdjlForm= new FormGroup({
  title: new FormControl(''),
  name: new FormControl(''),
  phone: new FormControl(''),
  address: new FormControl(''),
  email: new FormControl(''),
  postcodes: new FormControl(''),
  content: new FormControl(''),
})
  constructor(private http: HttpClient){ }

  ngOnInit(): void {
  }
  save(){
    console.log(this.hdjlForm.value)
  }
}
