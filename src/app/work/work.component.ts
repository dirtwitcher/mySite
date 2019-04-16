import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface operations {
  // idWork : number;
  moneyOper : number;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {

  public cash : string = "no data";
  public money : number = 0;
  public static inputId: number;
  public static inAcc: number;
  public inputOherId: string;
  public selectOption: string;
  public myDataWork;
  
  constructor(private _sanitizer: DomSanitizer, public http: HttpClient) {
  }

  send() {
    if (WorkComponent.inAcc == 1){ // esli avtorizovalis
      if (this.selectOption=="Put"){
        this.http.get<operations>('http://172.20.2.116:48916/put/' + WorkComponent.inputId + "/" + this.money)
        .subscribe(data => {
          //console.log('id: ' + data.idWork);
          console.log('prMoney: ' + data.moneyOper);
          this.myDataWork = data;});
          this.cash = this.myDataWork.moneyOper.toString();
      } else
      if (this.selectOption=="Take"){
        this.http.get<operations>('http://172.20.2.116:48916/take/' + WorkComponent.inputId + "/" + this.money)
        .subscribe(data => {
          //console.log('id: ' + data.idWork);
          console.log('prMoney: ' + data.moneyOper);
          this.myDataWork = data;});
          this.cash = this.myDataWork.moneyOper.toString();
      } else
      if (this.selectOption=="Transact"){
        this.http.get<operations>('http://172.20.2.116:48916/transact/' + WorkComponent.inputId + "/" + this.inputOherId + "/" + this.money)
        .subscribe(data => {
          //console.log('id: ' + data.idWork);
          console.log('prMoney: ' + data.moneyOper);
          this.myDataWork = data;});
          this.cash = this.myDataWork.moneyOper.toString();
      } else
      if (this.selectOption=="Print"){
        this.http.get<operations>('http://172.20.2.116:48916/print/' + WorkComponent.inputId)
        .subscribe(data => {
          //console.log('id: ' + data.idWork);
          console.log('prMoney: ' + data.moneyOper);
          this.myDataWork = data;});
          this.cash = this.myDataWork.moneyOper.toString();
      } else this.cash="no data";
    } else this.cash="no data. You are not in system";
  }

  clearData() {
    this.cash = "no data";
    this.money = null;
    this.inputOherId = null;
  }

  ngOnInit() {
  }

}
