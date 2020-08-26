import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jygg',
  templateUrl: './Jygg.component.html',
  styleUrls: ['./Jygg.component.css']
})
export class JyggComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public policies: any = [];
  public baseUrl: any = 'http://218.29.137.134:22742/api/services/app/ZhengCeFaGuies/GetAll';

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.policies = res['result']['items']
      console.log(res);
    });
  }

}
