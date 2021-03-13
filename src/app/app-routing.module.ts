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
import { ZhuanrangComponent } from './header/jyggall/zhuanrang/zhuanrang.component';
import { XuqiuComponent } from './header/jyggall/xuqiu/xuqiu.component';
import { ChengjiaoComponent } from './header/jyggall/chengjiao/chengjiao.component';
import { JingjiaxinxiComponent } from './header/jyggall/jingjiaxinxi/jingjiaxinxi.component';
import { XqxxDetailComponent } from './jygg-table/xqxx-detail/xqxx-detail.component';
import { AppComponent } from './app.component';
import { PropertyManageMethodComponent } from './header/jygz/propertyManageMethod/property-manage-method.component';
import { ContactVisioComponent } from './header/jygz/contactVisio/contact-visio.component';
import { FileDownloadComponent } from './header/jygz/fileDownload/file-download.component';
import { JygzDetailComponent } from './header/jygz/jygz-detail/jygz-detail.component';
import { ProtocolComponent } from './common/protocol/protocol.component';
import { AskServiceComponent } from './header/hdjl/ask-service/ask-service.component';
import { CommonAskComponent } from './header/hdjl/common-ask/common-ask.component';


const routes: Routes = [

  { path: 'home', component: DashboradComponent },
  {path: 'login', component: LoginComponent},
  {path: 'regist', component: RegistComponent},
  {path: 'protocol', component: ProtocolComponent},
  {path: 'xwzx', component: XwzxComponent},
  {path: 'zcfg', component: ZcfgComponent},
  {path: 'jyggall', component: JyggAllComponent,children:[
    {path: 'zhuanrang', component: ZhuanrangComponent},
    {path: 'xuqiu', component: XuqiuComponent},
    {path: 'jingjiaxinxi', component: JingjiaxinxiComponent},
    {path: 'chengjiao', component: ChengjiaoComponent},
  ]},
  {path: 'jygz', component: JygzComponent, children:[
    {path: 'propertyMM', component:PropertyManageMethodComponent},
    {path: 'contactV', component:ContactVisioComponent},
    {path: 'filedownload', component:FileDownloadComponent},
  ]},
  {path: 'jygz-detail/:id', component:JygzDetailComponent},
  {path: 'cjgg', component: CjggComponent},
  {path: 'zhcx', component: ZhcxComponent},
  {path: 'hdjl', component: HdjlComponent, children:[
    {path: 'ask-service', component: AskServiceComponent},
    {path: 'common-ask', component: CommonAskComponent}
  ]},
  {path: 'lxwm', component: LxwmComponent},
  {path: 'xwdt', component: XwdtComponent},
  {path: 'tpxw', component: TpxwComponent},
  {path: 'newsdetail/:id', component: NewsDetailComponent},
  {path: 'gjzcfg', component: GjzcComponent},
  {path: 'dfzcfg', component: DfzcComponent},
  {path: 'policydetail/:id', component: PolicyDetailComponent},
  {path: 'jingjia', component: JingjiaComponent},
  {path: 'zrxxdetail/:id', component: ZrxxDetailComponent},
  {path: 'xqxxdetail/:id', component: XqxxDetailComponent},
  {path: 'cjggdetail/:id', component: CjggDetailComponent},
  {path: 'jjjydetail/:id', component: JjjyDetailComponent},
  {path: 'auction', component: AuctionComponent,children:[
    {path: 'myAuction', component: MyAuctionComponent},
    {path: 'auctionRule', component: AuctionRuleComponent},
    {path: 'auctioning/:id', component: AuctioningComponent}
  ],canActivate:[LoginGuard]},
  // {path: 'myAuction', component: MyAuctionComponent},
  {path: '**', component: DashboradComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
