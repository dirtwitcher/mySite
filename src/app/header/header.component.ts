import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public login: string;
  public pass : string;

  constructor() { }


  auth() {
    console.log(this.login);

  //  const login: string = HeaderComponent..controls.login.value;
  //  const pass = this.authForm.controls.password.value;

  //  this.http.get<DataResponse2>('http://172.20.2.116:48916/get/' + login)
  //  .subscribe(data=>
      
  //    )
  }


  ngOnInit() {
  }

}
