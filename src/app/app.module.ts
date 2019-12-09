import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { AdsComponent } from './ads/ads.component';
import { UsersComponent } from './users/users.component';
import { AdsService } from './ads/ads.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [LoginService, AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
