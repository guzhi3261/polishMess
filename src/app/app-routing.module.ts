import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XwzxComponent } from './header/xwzx/xwzx.component';
import { ZcfgComponent } from './header/zcfg/zcfg.component';
import { JyggAllComponent } from './header/jyggall/jyggall.component';
import { JygzComponent } from './header/jygz/jygz.component';
import { CjggComponent } from './jygg-table/cjgg/cjgg.component';
import { DashboradComponent } from './dashborad/dashborad/dashborad.component';
import { ZhcxComponent } from './header/zhcx/zhcx.component';
import { LxwmComponent } from './header/lxwm/lxwm.component';
import { HdjlComponent } from './header/hdjl/hdjl.component';
import { XwdtComponent } from './header/xwzx/xwdt/xwdt.component';
import { TpxwComponent } from './header/xwzx/tpxw/tpxw.component';
import { NewsDetailComponent } from './header/xwzx/news-detail/news-detail.component';
import { GjzcComponent } from './header/zcfg/gjzc/gjzc.component';
import { DfzcComponent } from './header/zcfg/dfzc/dfzc.component';
import { PolicyDetailComponent } from './header/zcfg/policy-detail/policy-detail.component';
import { JingjiaComponent } from './jingjia/jingjia.component';
import { ZrxxComponent } from './jygg-table/zrxx/zrxx.component';


const routes: Routes = [

  {path: 'xwzx', component: XwzxComponent},
  {path: 'zcfg', component: ZcfgComponent},
  {path: 'jyggall', component: JyggAllComponent},
  {path: 'jygz', component: JygzComponent},
  {path: 'cjgg', component: CjggComponent},
  {path: 'zhcx', component: ZhcxComponent},
  {path: 'hdjl', component: HdjlComponent},
  {path: 'lxwm', component: LxwmComponent},
  {path: 'xwdt', component: XwdtComponent},
  {path: 'tpxw', component: TpxwComponent},
  {path: 'newsdetail/:id', component: NewsDetailComponent},
  {path: 'gjzcfg', component: GjzcComponent},
  {path: 'dfzcfg', component: DfzcComponent},
  {path: 'policydetail/:id', component: PolicyDetailComponent},
  {path: 'jingjia', component: JingjiaComponent},
  {path: 'zrxxdetail', component: ZrxxComponent},
  {path: '**', component: DashboradComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
