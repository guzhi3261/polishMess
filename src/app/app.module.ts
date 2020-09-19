import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { NewsComponent } from './content/news/news.component';
import { ZrxxComponent } from './jygg-table/zrxx/zrxx.component';
import { JjjyComponent } from './jygg-table/jjjy/jjjy.component';
import { CjggComponent } from './jygg-table/cjgg/cjgg.component';
import { JyggComponent } from './jygg-table/jygg/jygg.component';
import { XwzxComponent } from './header/xwzx/xwzx.component';
import { ZcfgComponent } from './header/zcfg/zcfg.component';
import { JygzComponent } from './header/jygz/jygz.component';
import { DashboradComponent } from './dashborad/dashborad/dashborad.component';
import { JyggAllComponent } from './header/jyggall/jyggall.component';
import { ZhcxComponent } from './header/zhcx/zhcx.component';
import { HdjlComponent } from './header/hdjl/hdjl.component';
import { LxwmComponent } from './header/lxwm/lxwm.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NewsService } from './model/News.service';
import { HttpModule } from '@angular/http';
import { XwdtComponent } from './header/xwzx/xwdt/xwdt.component';
import { TpxwComponent } from './header/xwzx/tpxw/tpxw.component';
import { NewsDetailComponent } from './header/xwzx/news-detail/news-detail.component';
import { GjzcComponent } from './header/zcfg/gjzc/gjzc.component';
import { DfzcComponent } from './header/zcfg/dfzc/dfzc.component';
import { PolicyDetailComponent } from './header/zcfg/policy-detail/policy-detail.component';
import { JingjiaComponent } from './jingjia/jingjia.component';

import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import { CardModule } from 'primeng';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZrxxDetailComponent } from './jygg-table/zrxx-detail/zrxx-detail.component';
import { CjggDetailComponent } from './jygg-table/cjgg-detail/cjgg-detail.component';
import { JjjyDetailComponent } from './jygg-table/jjjy-detail/jjjy-detail.component';
import { XqxxComponent } from './jygg-table/xqxx/xqxx.component';
import { xqTypePipe } from './model/dataPipe.model';
import { LoginComponent } from './common/login/login.component';
import { RegistComponent } from './common/regist/regist.component';
import { AuctionComponent } from './auction/auction.component';
import { MyAuctionComponent } from './auction/my-auction/my-auction.component';
import { AuctionRuleComponent } from './auction/auction-rule/auction-rule.component';
import { AuctioningComponent } from './auction/auctioning/auctioning.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,  NewsComponent, HeaderComponent, ZrxxComponent, JjjyComponent, CjggComponent,
    JyggAllComponent, XwzxComponent, ZcfgComponent, 
    JyggComponent, JygzComponent, DashboradComponent,
    ZhcxComponent, HdjlComponent, LxwmComponent,
    XwdtComponent, TpxwComponent, NewsDetailComponent,
    GjzcComponent, DfzcComponent, PolicyDetailComponent,
    JingjiaComponent, 
    ZrxxDetailComponent, CjggDetailComponent, JjjyDetailComponent,
    XqxxComponent,
    xqTypePipe,
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
    InputTextModule,
    ButtonModule, TabViewModule,DialogModule, 
    ProgressBarModule,
    FormsModule,
    CardModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [NewsService,CookieService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
