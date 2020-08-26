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
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZrxxDetailComponent } from './jygg-table/zrxx-detail/zrxx-detail.component';


@NgModule({
  declarations: [
    AppComponent,  NewsComponent, HeaderComponent, ZrxxComponent, JjjyComponent, CjggComponent,
    JyggAllComponent,
    XwzxComponent, ZcfgComponent, 
    JyggComponent, JygzComponent, DashboradComponent,
    ZhcxComponent, HdjlComponent, LxwmComponent,
    XwdtComponent, TpxwComponent, NewsDetailComponent,
    GjzcComponent, DfzcComponent, PolicyDetailComponent,
    JingjiaComponent, 
    ZrxxDetailComponent
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
    DialogModule,ButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [NewsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
