import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { Router, RouterModule } from '@angular/router';
import { SwipperPicComponent } from './swipper-pic/swipper-pic.component';



@NgModule({
  declarations: [NewsComponent, SwipperPicComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NewsComponent
  ]
})
export class ContentModule { }
