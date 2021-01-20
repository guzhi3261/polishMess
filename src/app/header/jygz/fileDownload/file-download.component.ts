import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
})
export class FileDownloadComponent implements OnInit {
  totalRecords: any;
  heTongList: [];
  tuQuanList: [];
  qiTaList: [];

  constructor(private http: HttpClient) { }
  public url = 'http://218.29.137.134:22742/api/services/app/ZiLiaoXiaZaies/GetAll';
  public getFileUrl = 'http://218.29.137.134:22742/api/services/app/ZiLiaoXiaZaies/GetZiLiaoXiaZaiForEdit?Id=';
  public fileList: [];
  public downUrl: string;


  ngOnInit(): void {
    this.getFileList()
  }

 getFileList(){
   this.http.get(this.url).subscribe((res : Response)=>{
     this.heTongList = res['result']['items']
        .filter(hetong => hetong.ziLiaoXiaZaiTypeZiLiaoXiaZaiTypeTitle == "合同模板" );
     this.tuQuanList = res['result']['items']
        .filter(tuquan => tuquan.ziLiaoXiaZaiTypeZiLiaoXiaZaiTypeTitle == "产权交易");
     this.qiTaList = res['result']['items']
        .filter(tuquan => tuquan.ziLiaoXiaZaiTypeZiLiaoXiaZaiTypeTitle == "其他资料");
     this.totalRecords = res['result'].totalCount;
   })
 }
 getDownload(id){
   const url = this.getFileUrl.concat(id)
   this.http.get(url).subscribe(data => {  
     this.downUrl = this.addImageIp(data['result']['ziLiaoXiaZai'].image)      
   })
   window.open(this.downUrl,"_self")
   return this.downUrl;
 }
 addImageIp(images0: string): string {
  if (images0) {
      let re = /@/gi;
      images0 = images0.replace(re, 'http://218.29.137.134:22742'); 
       return images0;
  } else {
      return null;
  }
}
}
