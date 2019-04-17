import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface operations {
  moneyOper : number;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {

  public cash : string = "no data. You are not in system";
  public money : number = null;
  public inputOtherId: string;
  public selectOption: string;

  public static inputId : string = " no information";
  public static inAcc: number;

  public myDataWork;
  
  constructor(private _sanitizer: DomSanitizer, public http: HttpClient) {
  }

  get staticInputId() {
    return WorkComponent.inputId;
  }

  send() {
    if (WorkComponent.inAcc == 1){ // esli avtorizovalis
      if (this.selectOption=="Put"){
        this.http.get<operations>('http://172.20.2.116:48916/put/' + WorkComponent.inputId + "/" + this.money)
        .subscribe(data => {
          console.log('PUT. print money now: ' + data.moneyOper);
          this.cash = data.moneyOper.toString();
          this.myDataWork = data;});
      } else
      if (this.selectOption=="Take"){
        this.http.get<operations>('http://172.20.2.116:48916/take/' + WorkComponent.inputId + "/" + this.money)
        .subscribe(data => {
          console.log('TAKE. print money now: ' + data.moneyOper);
          this.cash = data.moneyOper.toString();
          this.myDataWork = data;});
      } else
      if (this.selectOption=="Transact"){
        this.http.get<operations>('http://172.20.2.116:48916/transact/' + WorkComponent.inputId + "/" + this.inputOtherId + "/" + this.money)
        .subscribe(data => {
          console.log('TRANSACT. print money now: ' + data.moneyOper);
          this.cash = data.moneyOper.toString();
          this.myDataWork = data;});
      } else
      if (this.selectOption=="Print"){
        this.http.get<operations>('http://172.20.2.116:48916/print/' + WorkComponent.inputId)
        .subscribe(data => {
          console.log('PRINT money: ' + data.moneyOper);
          this.cash = data.moneyOper.toString();
          this.myDataWork = data;});
      } else this.cash="no data";
    } else this.cash="no data. You are not in system";
  }

  clearData() {
    this.cash = "no data. You are not in system";
    this.money = null;
    this.inputOtherId = null;
    WorkComponent.inputId=" no information";
    WorkComponent.inAcc == 0;
  }

  ngOnInit() {
  }

}
