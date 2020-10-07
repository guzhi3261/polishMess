import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad/dashborad.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { ContentModule } from '../content/content.module';
import { JyggTableModule } from '../jygg-table/jygg-table.module';



@NgModule({
  declarations: [DashboradComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    ContentModule,
    JyggTableModule
  ]
})
export class DashboradModule { }
