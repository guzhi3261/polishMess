import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NewsComponent
  ]
})
export class ContentModule { }
