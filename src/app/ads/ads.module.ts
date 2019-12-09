import { NgModule } from '@angular/core';
import { AdsComponent } from './ads.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    AdsComponent,
    HttpClient,
  ],
  exports: [
    AdsComponent
  ]
})

export class AdsModule{ }
