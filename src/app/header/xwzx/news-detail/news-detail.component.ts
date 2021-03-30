import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { NewsService } from 'src/app/model/News.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  public contentUrl: any = 'http://218.29.137.134:22742/api/services/app/Newses/GetNewsForEdit?Id=';
  public news: any;
  public id: number;
  public author: string;
  public title: string;
  public creationTime: string;
  public newsContent: any;

  constructor(private http: HttpClient, protected activatedroute: ActivatedRoute, private route: Router, private service: NewsService) {
    this.id = this.activatedroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get(this.contentUrl + this.id).subscribe((res) => {
      this.news = res['result']['news'];
      this.newsContent = this.news.content;
      this.author = this.news.author;
      this.title = this.news.title;
      this.creationTime = this.news.creationTime;
  });
}
printCon(){
  const printContent = document.getElementById("printCon");
  const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
  WindowPrt.document.write(printContent.innerHTML);
  WindowPrt.document.close();
  WindowPrt.focus();
  WindowPrt.print();
  WindowPrt.close();
}

}
