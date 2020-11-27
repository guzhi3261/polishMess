import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboradModule } from './dashborad/dashborad.module';
import { HeaderModule } from './header/header.module';
import { JyggTableModule } from './jygg-table/jygg-table.module';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NewsService } from './model/News.service';
import { HttpModule } from '@angular/http';


import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';

import { ButtonModule } from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import { CardModule } from 'primeng';
import {DropdownModule} from 'primeng/dropdown';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './common/login/login.component';
import { RegistComponent } from './common/regist/regist.component';
import { AuctionComponent } from './auction/auction.component';
import { MyAuctionComponent } from './auction/my-auction/my-auction.component';
import { AuctionRuleComponent } from './auction/auction-rule/auction-rule.component';
import { AuctioningComponent } from './auction/auctioning/auctioning.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ContentModule } from './content/content.module';



@NgModule({
  declarations: [ 
    AppComponent,  
    LoginComponent,
    RegistComponent,
    AuctionComponent,
    MyAuctionComponent,
    AuctionRuleComponent,
    AuctioningComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpModule,
    DashboradModule,
    HeaderModule,
    ContentModule,
    JyggTableModule,
    InputTextModule,
    ButtonModule, TabViewModule,DialogModule, PaginatorModule,
    ProgressBarModule,
    FormsModule,
    CardModule,
    DropdownModule,
    
   

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [NewsService,CookieService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
