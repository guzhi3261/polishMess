import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jjjy-detail',
  templateUrl: './jjjy-detail.component.html',
  styleUrls: ['./jjjy-detail.component.css']
})
export class JjjyDetailComponent implements OnInit {
  id;
  jjxx;
  public bianHao: string;
  public GongShiRiQi: string;
  public JingPaiShiJian: string;
  public BiaoDuanMiaoShu: string;
  public BaoMingFei: string;
  public BaoZhengJin: string;
  public ChuJiaYanShi: string;
  public BaoLiuJia: string;
  public DiJia: string;
  public JiaJiaFuDu: string;
  public JiaoYiFangShi: string;

  public BaoMingShiJian: string;
  public ChengJiaoJiaoKuanJieZhiShiJian: string;
  public LianXiRen: string;
  public LianXiDianHua: string;
  public BaoMingDiDian: string;
  public JiaoYiDiDian: string;

  public PingGuJiGou: string;
  public PingGuJiZhunRi: string;
  public PingGuZhi: string;

  public DiZhi: string;
  public DengJiRiQi: string;
  public SuoYouQuanRen: string;
  public QuanZhengBianHao: string;
  public QuanZhengNianXian: string;
  public ShiFouXuZu: true;
  public ChengBaoQuanRen: string;
  public JiaoYiMianJi: string;
  public SiZhi: string;
  public ChengBaoJingYingQuanZhengBianHao: string;
  public QuanShuLeiXing: string;
  public QiTaQuanLiRen: string;
  public XiangMuShenPiXinXi: string;
  public XiangMuShenPiBiao: string;
  public CunMinDaiBiaoDaHuiYiJianBiao: string;

  public DanWeiXingMing: string;
  public lcf_LianXiRen: string;
  public lcf_LianXiDianHua: string;

  public XingMing: string;
  public bwtr_LianXiDianHua: string;
  public GongZuoDanWei: string;
  
  

  url = 'http://218.29.137.134:22742/api/services/app/JingJiaModels/GetJingJiaModelForEdit?Id=';
  constructor(private http:HttpClient, protected activatedroute: ActivatedRoute, private route: Router) { 
    this.id = this.activatedroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get(this.url+this.id).subscribe(res => {
      this.jjxx = res['result']['jingJiaModel'];
      this.bianHao = this.jjxx.bdxX_BiaoDuanBianHao;
      this.GongShiRiQi = this.jjxx.bdxX_GongShiRiQi;
      this.JingPaiShiJian = this.jjxx.bdxX_JingPaiShiJian;
      this.BiaoDuanMiaoShu = this.jjxx.bdxX_BiaoDuanMiaoShu;
      this.BaoMingFei = this.jjxx.bdxX_BaoMingFei;
      this.BaoZhengJin = this.jjxx.bdxX_BaoZhengJin;
      this.ChuJiaYanShi = this.jjxx.bdxX_ChuJiaYanShi;
      this.DiJia = this.jjxx.bdxX_DiJia;
      this.JiaJiaFuDu = this.jjxx.bdxX_JiaJiaFuDu;
      this.JiaoYiFangShi = this.jjxx.bdxX_JiaoYiFangShi;

      this.BaoMingShiJian = this.jjxx.bmxX_BaoMingShiJian;
      this.ChengJiaoJiaoKuanJieZhiShiJian = this.jjxx.bmxX_ChengJiaoJiaoKuanJieZhiShiJian;
      this.LianXiRen = this.jjxx.bmxX_LianXiRen;
      this.LianXiDianHua = this.jjxx.bmxX_LianXiDianHua;
      this.BaoMingDiDian = this.jjxx.bmxX_BaoMingDiDian;
      this.JiaoYiDiDian = this.jjxx.JiaoYiDiDian;

      this.PingGuJiGou = this.jjxx.pgxX_PingGuJiGou;
      this.PingGuJiZhunRi = this.jjxx.pgxX_PingGuJiZhunRi;
      this.PingGuZhi = this.jjxx.pgxX_PingGuZhi;

      this.DiZhi = this.jjxx.cqxX_DiZhi;
      this.DengJiRiQi = this.jjxx.cqxX_DengJiRiQi;
      this.SuoYouQuanRen = this.jjxx.cqxX_SuoYouQuanRen;
      this.QuanZhengBianHao = this.jjxx.cqxX_QuanZhengBianHao;
      this.QuanZhengNianXian = this.jjxx.cqxX_QuanZhengNianXian;
      this.ShiFouXuZu = this.jjxx.cqxX_ShiFouXuZu;
      this.ChengBaoQuanRen = this.jjxx.cqxX_ChengBaoQuanRen;
      this.JiaoYiMianJi = this.jjxx.cqxX_JiaoYiMianJi;
      this.SiZhi = this.jjxx.cqxX_SiZhi;
      this.ChengBaoJingYingQuanZhengBianHao = this.jjxx.cqxX_ChengBaoJingYingQuanZhengBianHao;
      this.QuanShuLeiXing = this.jjxx.cqxX_QuanShuLeiXing;
      this.QiTaQuanLiRen = this.jjxx.cqxX_QiTaQuanLiRen;
      this.XiangMuShenPiXinXi = this.jjxx.cqxX_XiangMuShenPiXinXi;
      this.XiangMuShenPiBiao = this.jjxx.cqxX_XiangMuShenPiBiao;
      this.CunMinDaiBiaoDaHuiYiJianBiao = this.jjxx.cqxX_CunMinDaiBiaoDaHuiYiJianBiao;

      this.DanWeiXingMing = this.jjxx.lcF_DanWeiXingMing;
      this.lcf_LianXiRen = this.jjxx.lcF_LianXiRen;
      this.lcf_LianXiDianHua = this.jjxx.lcF_LianXiDianHua;

      this.XingMing = this.jjxx.bwtR_XingMing;
      this.bwtr_LianXiDianHua = this.jjxx.bwtR_LianXiDianHua;
      this.GongZuoDanWei = this.jjxx.bwtR_GongZuoDanWei;


      

    })
  }

}
