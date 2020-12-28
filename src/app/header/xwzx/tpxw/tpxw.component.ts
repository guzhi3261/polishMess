import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LazyLoadEvent, Paginator, Table } from 'primeng';

@Component({
  selector: 'app-tpxw',
  templateUrl: './tpxw.component.html',
  styleUrls: ['./tpxw.component.css']
})
export class TpxwComponent implements OnInit {

  @ViewChild('paginator', { static: true }) paginator: Paginator;
  @ViewChild('dataTable', { static: true }) dataTable: Table;


  public newses: any = [];
  public result ;
  public newsTop: {} = {};
  isLoading = false;
  public baseUrl: any = 'http://218.29.137.134:22742/api/services/app/Newses/GetAll?NewsTypeNewsTypeTitleFilter=%E5%9B%BE%E7%89%87%E6%96%B0%E9%97%BB&SkipCount=0&MaxResultCount=100';
  public totalRecords = 20;

 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // 请求数据
   
    this.http.get(this.baseUrl).toPromise()
    .then(res =>
      {this.newses = res["result"]["items"]; 
      this.totalRecords = res["result"].totalCount;
      console.log(this.newses)
    })
    
    
  }
  // getTpxwNews(event?: LazyLoadEvent) {
  //   if (this.shouldResetPaging(event)) {
  //     this.paginator.changePage(0);
  //     return;
  //   }
  //   this.showLoadingIndicator();
  //   this.http.get(this.baseUrl).subscribe((res: Response) => {
  //     this.newses = res['result']['items'];
  //     this.newsTop = this.newses[0];
  //     this.totalRecords = res['totalCount'];
  //   })

  // }
  // showLoadingIndicator(): void {
  //   setTimeout(() => {
  //     this.isLoading = true;
  //   }, 0);
  // }
  // shouldResetPaging(event: LazyLoadEvent): boolean {
  //   if (!event /*|| event.sortField*/) { // if you want to reset after sorting, comment out parameter
  //     return true;
  //   }

  //   return false;
  // }
  // getSorting(table: Table): string {
  //   let sorting;
  //   if (table.sortField) {
  //     sorting = table.sortField;
  //     if (table.sortOrder === 1) {
  //       sorting += ' ASC';
  //     } else if (table.sortOrder === -1) {
  //       sorting += ' DESC';
  //     }
  //   }

  //   return sorting;
  // }
  // getMaxResultCount(paginator: Paginator, event: LazyLoadEvent): number {
  //   if (paginator.rows) {
  //     return paginator.rows;
  //   }

  //   if (!event) {
  //     return 0;
  //   }

  //   return event.rows;
  // }

  // getSkipCount(paginator: Paginator, event: LazyLoadEvent): number {
  //   if (paginator.first) {
  //     return paginator.first;
  //   }

  //   if (!event) {
  //     return 0;
  //   }

  //   return event.first;
  // }
  // onPage(event: any) {
  //   // 当点击的页数和当前显示的页数不等是，请求单击页对应的数据
  //   if (this.page != event.page) {
  //       this.page = event.page;
  //       this.refresh();
  //   }
  // }  
  // refresh(){
    
  // }
}


