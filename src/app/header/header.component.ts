import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkComponent } from '../work/work.component';

interface accTable {
  idHeader : number;
  iAmInAcc : number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public authLog: string;
  public authPass : string;

  public regLog : string;
  public regPass : string;
  public regRepPass : string;
  
  public myDataHeader;

  constructor(private _sanitizer: DomSanitizer, public http: HttpClient) {
  }

  auth() {
    this.http.get<accTable>('http://172.20.2.116:48916/auth/' + this.authLog + '/' + this.authPass)
    .subscribe(data => {
      console.log('id: ' + data.idHeader);
      console.log('auth sucsess 0 - false, 1 - true: ' + data.iAmInAcc);
      WorkComponent.inputId = data.idHeader.toString();
      WorkComponent.inAcc = data.iAmInAcc;
      this.myDataHeader = data;});
      //WorkComponent.inputId = this.myDataHeader.idHeader;
      //WorkComponent.inAcc = this.myDataHeader.iAmInAcc;
  }

  registr() {
    if (this.regPass == this.regRepPass) {
      this.http.get<accTable>('http://172.20.2.116:48916/registr/' + this.regLog + '/' + this.regPass)
      .subscribe(data => {
        this.myDataHeader = data;});
      console.log('pass = repPass');
    }else{
      console.log('err. pass != repPass');
    }
  }

  ngOnInit() {
  }

}
