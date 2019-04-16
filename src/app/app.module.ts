import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // connect forms
import { Routes, RouterModule } from '@angular/router'; //connect routes
import { HttpClientModule } from '@angular/common/http';//htttp connect

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //connect bootstrap
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { WorkComponent } from './work/work.component';
import { ResumeComponent } from './resume/resume.component'; 

const appRoutes: Routes = [
  {path:'', component: BodyComponent},  
  {path:'work', component: WorkComponent},
  {path:'resume', component: ResumeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    WorkComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //connect forms
    HttpClientModule, //connect http
    AppRoutingModule,
    NgbModule.forRoot(), //connect bootstrap
    RouterModule.forRoot(appRoutes) //connect routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
