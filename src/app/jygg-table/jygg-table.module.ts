import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { CjggComponent } from './cjgg/cjgg.component';
import { JyggComponent } from './jygg/jygg.component';

import { JjjyComponent } from './jjjy/jjjy.component';
import { ZrxxComponent } from './zrxx/zrxx.component';
import { XqxxComponent } from './xqxx/xqxx.component';
import { XqxxDetailComponent } from './xqxx-detail/xqxx-detail.component';
import { CjggDetailComponent } from './cjgg-detail/cjgg-detail.component';
import { JjjyDetailComponent } from './jjjy-detail/jjjy-detail.component';
import { ZrxxDetailComponent } from './zrxx-detail/zrxx-detail.component';
import { xqTypePipe, jingJiaFangShiPipe, booleanPipe,zhuanChuFangShiPipe, jiaGeDanWeiPipe, zhiFuFangShiPipe,  } from '../model/dataPipe.model';



@NgModule({
  declarations: [
    xqTypePipe, jingJiaFangShiPipe, booleanPipe,zhuanChuFangShiPipe, jiaGeDanWeiPipe, zhiFuFangShiPipe, 
    JyggComponent,
    CjggComponent, CjggDetailComponent,
    JjjyComponent, JjjyDetailComponent,
    XqxxComponent, XqxxDetailComponent,
    ZrxxComponent,ZrxxDetailComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderModule
  ],
  exports:[
    JyggComponent,
    CjggComponent, CjggDetailComponent,
    JjjyComponent, JjjyDetailComponent,
    XqxxComponent, XqxxDetailComponent,
    ZrxxComponent,ZrxxDetailComponent,

  ]
})
export class JyggTableModule { }
