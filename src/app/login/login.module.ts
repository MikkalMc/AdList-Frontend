import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginComponent,
    HttpClient,
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule{ }
