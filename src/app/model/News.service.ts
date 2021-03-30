import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { News } from './News.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsService implements OnInit {
    public N: News[] = [];
    baseUrl = 'http://218.29.137.134:22742/api/services/app/Newses/GetAll';
    contentUrl = 'http://218.29.137.134:22742/api/services/app/Newses/GetNewsForEdid';
    // httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //   };
    constructor(private http: HttpClient) {
    }
    ngOnInit() { }
    getNewses(): Observable<News[]> {
       return this.http.get<News[]>(this.baseUrl);
        
        // this.http.get(this.baseUrl).subscribe((res: Response) => {
        // this.newses = res['result']['items'];
        // });
    }
    getNews(id: number): Observable<News> {
        const url = `${this.contentUrl}/${id}`;
        return this.http.get<News>(url);
      }
   
    
}
