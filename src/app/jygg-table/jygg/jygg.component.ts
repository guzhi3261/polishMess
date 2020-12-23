import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';


@Component({
  selector: 'app-jygg',
  templateUrl: './Jygg.component.html',
  styleUrls: ['./Jygg.component.css']
})
export class JyggComponent implements OnInit {

  constructor(private http: HttpClient) {
   
   }
  public policies: any = [];
  public cityAll = [];
  public town: any = [];
  public townsSelected: any;
  public villageSelected: any;
  public villages: any = [];
  public baseUrl: any = 'http://218.29.137.134:22742/api/services/app/ZhengCeFaGuies/GetAll';
  public townsUrl: any = 'http://218.29.137.134:22742/api/services/app/QuYuBianMas/GetAll?Filter=&codeFilter=&nameFilter=&pidFilter=&SkipCount=0&MaxResultCount=1000'

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe((res: Response) => {
      this.policies = res['result']['items'].reverse();
    });
    this.getTowns();
  }

  //get towms and village
  getTowns() {
    this.http.get(this.townsUrl).subscribe((res:Response) => {
      length = res['result']['totalCount']
      for( var i = 0; i < length; i++){
        this.cityAll.push(res['result']['items'].pop())
        if(this.cityAll[i].quYuBianMa.code.length == 9){
          this.town.push(this.cityAll[i].quYuBianMa)
        }     
      }
      return this.town     
    })
  }
  getVillages(){
    
    this.villages=[]
    for ( var v = 0 ;v < this.cityAll.length; v++){
      if(this.cityAll[v].quYuBianMa.code.substring(0,9) == this.townsSelected){
        this.villages.push(this.cityAll[v].quYuBianMa)
      }
    }
      
  }


}
