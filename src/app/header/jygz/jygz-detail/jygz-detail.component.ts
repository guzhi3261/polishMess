import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jygz-detail',
  templateUrl: './jygz-detail.component.html',
  styleUrls: ['./jygz-detail.component.css']
})
export class JygzDetailComponent implements OnInit {

  public contentUrl: any = 'http://218.29.137.134:22742/api/services/app/JiaoYiGuiZees/GetJiaoYiGuiZeForEdit?Id=';
  public jygz: any;
  public id: number;
  public author: string;
  public title: string;
  public jygzContent: any;

  constructor(private http: HttpClient, protected activatedroute: ActivatedRoute) { 
    this.id = this.activatedroute.snapshot.params['id'];
    console.log(this.id)
  }

  ngOnInit(): void {
    this.http.get(this.contentUrl + this.id).subscribe((res) => {
      this.jygz = res['result']['jiaoYiGuiZe'];
      this.jygzContent = this.jygz.content;
      this.author = this.jygz.author;
      this.title = this.jygz.title;
      console.log(res);
  });

  }

}
