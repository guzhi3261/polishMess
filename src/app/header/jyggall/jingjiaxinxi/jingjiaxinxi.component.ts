import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jingjiaxinxi',
  templateUrl: './jingjiaxinxi.component.html',
  styleUrls: ['./jingjiaxinxi.component.css']
})
export class JingjiaxinxiComponent implements OnInit {
  public url = 'http://218.29.137.134:22742/api/services/app/JingJiaModels/GetAll';
  public jingjiaList ; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe( res => {
      this.jingjiaList = res['result']['items'].reverse();
    })
  }

}
