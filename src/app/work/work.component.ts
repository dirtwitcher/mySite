import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})

export class WorkComponent implements OnInit {

  // public myForm: FormGroup;
  public cash : string = "- - - -";
  public inputId: string;
  public inputOherId: string;

  constructor() { }


  send() {
  //  console.log(this.authForm);

  //  const login: string = myForm.controls.myForm.inputId.value;
  //  const pass = this.authForm.controls.password.value;

   // this.http.get<DataResponse2>('http://172.20.2.116:48916/get/' + login)
   // .subscribe(data=>
      
   //   )
   // this.cash="no data";
   this.cash = this.inputId;
  }

  clearData() {
    this.cash = "- - - -";
    this.inputId = null;
    this.inputOherId = null;
  }

  ngOnInit() {
  }

}
