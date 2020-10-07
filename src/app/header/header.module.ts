import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import { CardModule } from 'primeng';
import {DropdownModule} from 'primeng/dropdown';

import { HeaderComponent } from './header/header.component';
import { ZhuanrangComponent } from './jyggall/zhuanrang/zhuanrang.component';
import { XuqiuComponent } from './jyggall/xuqiu/xuqiu.component';
import { ChengjiaoComponent } from './jyggall/chengjiao/chengjiao.component';
import { JingjiaxinxiComponent } from './jyggall/jingjiaxinxi/jingjiaxinxi.component';
import { JyggAllComponent } from './jyggall/jyggall.component';
import { XwzxComponent } from './xwzx/xwzx.component';
import { ZcfgComponent } from './zcfg/zcfg.component';
import { JyggComponent } from '../jygg-table/jygg/jygg.component';
import { JygzComponent } from './jygz/jygz.component';
import { JingjiaComponent } from '../jingjia/jingjia.component';
import { ZhcxComponent } from './zhcx/zhcx.component';
import { HdjlComponent } from './hdjl/hdjl.component';
import { LxwmComponent } from './lxwm/lxwm.component';
import { XwdtComponent } from './xwzx/xwdt/xwdt.component';
import { TpxwComponent } from './xwzx/tpxw/tpxw.component';
import { NewsDetailComponent } from './xwzx/news-detail/news-detail.component';
import { DfzcComponent } from './zcfg/dfzc/dfzc.component';
import { GjzcComponent } from './zcfg/gjzc/gjzc.component';
import { PolicyDetailComponent } from './zcfg/policy-detail/policy-detail.component';
import { JyggTableModule } from '../jygg-table/jygg-table.module';


@NgModule({
  declarations: [
    HeaderComponent,
    XwzxComponent, NewsDetailComponent, XwdtComponent, TpxwComponent,
    ZcfgComponent,DfzcComponent,GjzcComponent,PolicyDetailComponent,
    JygzComponent,
    JingjiaComponent,
    ZhcxComponent,
    HdjlComponent,
    LxwmComponent,
    JyggAllComponent, ZhuanrangComponent, XuqiuComponent, ChengjiaoComponent,JingjiaxinxiComponent
    ],
  imports: [
    CommonModule, 
    RouterModule,
    InputTextModule,
    TabViewModule,
    DialogModule,
    ButtonModule,
    CardModule,
    DropdownModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
