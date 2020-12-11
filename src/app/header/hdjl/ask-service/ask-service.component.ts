import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ask-service',
  templateUrl: './ask-service.component.html',
  styleUrls: ['./ask-service.component.css']
})
export class AskServiceComponent implements OnInit {

  hdjlForm= new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    postcodes: new FormControl(''),
    content: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log(this.hdjlForm.value)
  }
}
