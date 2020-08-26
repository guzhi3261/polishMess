import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css']
})
export class PolicyDetailComponent implements OnInit {
  public contentUrl: any = 'http://218.29.137.134:22742/api/services/app/ZhengCeFaGuies/GetZhengCeFaGuiForEdit?Id=';
  public policy: any;
  public id: number;
  public author: string;
  public title: string;
  public content: any;


  constructor(private http: HttpClient, protected activatedroute: ActivatedRoute, private route: Router ) {
    this.id = this.activatedroute.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit(): void {
    this.http.get(this.contentUrl + this.id).subscribe((res) => {
      console.log(this.contentUrl + this.id)
      this.policy = res['result']['zhengCeFaGui'];
      this.content = this.policy.content;
      this.author = this.policy.author;
      this.title = this.policy.title;
      console.log(res);
  });

}
}
