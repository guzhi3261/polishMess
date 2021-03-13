import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUsernameService } from 'src/app/model/get-username.service';


@Component({
  selector: 'app-jjjy-detail',
  templateUrl: './jjjy-detail.component.html',
  styleUrls: ['./jjjy-detail.component.css']
})
export class JjjyDetailComponent implements OnInit {
  id;
  jjxx;
  //本地缓存
  public storage ;
  public bianHao: string;
  public GongShiRiQi: string;
  public JingPaiShiJian: any;
  public JingPaiShiJianEnd: any;
  public BiaoDuanMiaoShu: string;
  public BaoMingFei: string;
  public BaoZhengJin: string;
  public ChuJiaYanShi: string;
  public BaoLiuJia: string;
  public DiJia: string;
  public JiaJiaFuDu: string;
  public JiaoYiFangShi: 0;

  public BaoMingShiJian: string;
  public ChengJiaoJiaoKuanJieZhiShiJian: string;
  public LianXiRen: string;
  public LianXiDianHua: string;
  public BaoMingDiDian: string;
  public JiaoYiDiDian: string;

  public PingGuJiGou: string;
  public PingGuJiZhunRi: string;
  public PingGuZhi: string;

  public jingJiaFangShi: 0;

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
  public jjBianHao: string;

//附件下载
  public cqxX_XiangMuShenPiXinXi: string;
  public cqxX_CunMinDaiBiaoDaHuiYiJianBiao: string;
  public fJ_YiXiangLiuRuFangChengNuoShu: string;
  public fJ_ShouQuanWeiTuoShu: string;
  public fJ_JiaoYiGongGao: string;
  
  
  
  jingjiaUrl = 'http://218.29.137.134:22742/api/services/app/JingJiaModels/GetJingJiaModelForEdit?Id=';
  gongyingUrl = 'http://218.29.137.134:22742/api/services/app/GongYingXinXies/GetGongYingXinXiForEdit?Id=';
  baoMingGetAllUrlA = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/GetAll?UserIDFilter='
  baoMingGetAllUrlB = '&ProjectTypeFilter=2&JiaoYiFangShiFilter=-1&JingJiaFangShiFilter=-1&StatusFilter=-1&ShiFouZhongBiaoFilter=-1&ProjectIDFilter='
  gyxx;
  public jiaoNaXingShi: number;
  public zhuanChuBegin: number;
  public zhuanChuEnd: number;
  public years: number;


  userId: number;
  user: string ;
  isActive:boolean;

  public time = new Date()
  public baoMingRequestUrl = 'http://218.29.137.134:22742/api/services/app/BaoMingXinXies/CreateOrEdit';
  public baoMingRequestBody = {
    'projectID': '',
    'userId': 0,
    'projectName': '',
    'xiangMuBianHao':'',
    'createTime': this.time.toISOString(),
    'userName': '',
    "projectType": 0,
    "status": 0,
    "jingJiaKaiShiShiJian": this.time.toISOString(),
    "jiaoYiFangShi": 0,
    "jingJiaFangShi": 0,
    "shiFouZhongBiao": true,
    "jiaGe": 0,
    "id":null
    
  };
  
  constructor(
    private http:HttpClient, 
    protected activatedroute: ActivatedRoute, 
    private route: Router, 
    private GetUsernameService: GetUsernameService) { 
    this.id = this.activatedroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
    this.http.get(this.jingjiaUrl+this.id).subscribe(res => {
      this.jjxx = res['result']['jingJiaModel'];
      this.bianHao = this.jjxx.xiangMuBianHao;
      this.jjBianHao = this.jjxx.bdxx_bdxX_BiaoDuanBianHao
      this.GongShiRiQi = this.jjxx.bdxX_GongShiRiQi;
      this.JingPaiShiJian = new Date(this.jjxx.bdxX_JingPaiShiJian);
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

      this.cqxX_XiangMuShenPiXinXi = this.jjxx.cqxX_XiangMuShenPiXinXi;
      this.cqxX_CunMinDaiBiaoDaHuiYiJianBiao = this.jjxx.cqxX_CunMinDaiBiaoDaHuiYiJianBiao;
      this.fJ_YiXiangLiuRuFangChengNuoShu = this.jjxx.fJ_YiXiangLiuRuFangChengNuoShu;
      this.fJ_ShouQuanWeiTuoShu = this.jjxx.fJ_ShouQuanWeiTuoShu;
      this.fJ_JiaoYiGongGao = this.jjxx.fJ_JiaoYiGongGao;

      this.XingMing = this.jjxx.bwtR_XingMing;
      this.bwtr_LianXiDianHua = this.jjxx.bwtR_LianXiDianHua;
      this.GongZuoDanWei = this.jjxx.bwtR_GongZuoDanWei;
      this.JingPaiShiJianEnd = this.JingPaiShiJian.getTime() + 1000*60*30
      this.http.get(this.gongyingUrl + this.jjBianHao).subscribe(res => {
        this.gyxx = res['result'].gongYingXinXi;
        this.jiaoNaXingShi = this.gyxx.jiaoNaXingShi;
        this.zhuanChuBegin = new Date(this.gyxx.zhuanChuBegin).getFullYear();
        this.zhuanChuEnd = new Date(this.gyxx.zhuanChuEnd).getFullYear();
        this.years = this.zhuanChuEnd - this.zhuanChuBegin;
        this.jingJiaFangShi = this.gyxx.jingJiaFangShi;;

      })
    })
  }
  signUp() {
    //登录成功拿到用户id
    this.GetUsernameService.userId.subscribe(id => {
      // this.storage.userId = id
      this.userId = id
    })   

    //登录成功拿到用户名
    this.GetUsernameService.username.subscribe(user => {
      // this.storage.user = user;
      this.user = user});
      this.baoMingRequestBody = {
        'projectID': this.id,
        'userId': this.userId,
        'projectName': this.BiaoDuanMiaoShu,
        'xiangMuBianHao':this.bianHao,
        'createTime': this.time.toISOString(),
        'userName': this.user,
        "projectType": 2,
        "status": 0,
        "jingJiaKaiShiShiJian": this.time.toISOString(),
        "jiaoYiFangShi": this.JiaoYiFangShi,
        "jingJiaFangShi": this.jingJiaFangShi,
        "shiFouZhongBiao": false,
        "jiaGe": 0,   
        "id":null    
      }
      if(this.user){
        //整合用户名和供应id，创建一个报名信息
        //判断是否已经报名
        this.http.get(this.baoMingGetAllUrlA + this.userId + this.baoMingGetAllUrlB +this.id).subscribe(res => {
          if(res['result'].totalCount == 0){

            this.http.post(this.baoMingRequestUrl,this.baoMingRequestBody).subscribe((res)=> {
              if(res['success']){
                alert("你已经报名！");
              }
    
            })
          }else {
            alert("不可以重复报名")
          }
        })
      }else{
        this.isActive =  this.isActive == true ? false: true;
      }
   
  }

}
