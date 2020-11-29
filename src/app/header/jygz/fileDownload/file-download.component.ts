import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
})
export class FileDownloadComponent implements OnInit {

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
     this.fileList = res['result']['items'];
   })
 }
 getDownload(id){
   const url = this.getFileUrl.concat(id)
   this.http.get(url).subscribe(data => {  
     this.downUrl = this.addImageIp(data['result']['ziLiaoXiaZai'].image)      
   })
   window.open(this.downUrl)
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
