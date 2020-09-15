import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { RegistComponent } from './common/regist/regist.component';

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
import { ZrxxDetailComponent } from './jygg-table/zrxx-detail/zrxx-detail.component';
import { CjggDetailComponent } from './jygg-table/cjgg-detail/cjgg-detail.component';
import { JjjyDetailComponent } from './jygg-table/jjjy-detail/jjjy-detail.component';
import { AuctionComponent } from './auction/auction.component';
import { MyAuctionComponent } from './auction/my-auction/my-auction.component';
import { AuctionRuleComponent } from './auction/auction-rule/auction-rule.component';
import { AuctioningComponent } from './auction/auctioning/auctioning.component';
import { LoginGuard } from './common/login/login.guard';


const routes: Routes = [

  
  {path: 'login', component: LoginComponent},
  {path: 'regist', component: RegistComponent},
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
  {path: 'zrxxdetail/:id', component: ZrxxDetailComponent},
  {path: 'cjggdetail/:id', component: CjggDetailComponent},
  {path: 'jjjydetail', component: JjjyDetailComponent},
  {path: 'auction', component: AuctionComponent,children:[
    {path: 'myAuction', component: MyAuctionComponent},
    {path: 'auctionRule', component: AuctionRuleComponent},
    {path: 'auctioning', component: AuctioningComponent}
  ],canActivate:[LoginGuard]},
  // {path: 'myAuction', component: MyAuctionComponent},
  {path: '**', component: DashboradComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
