import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdsService implements OnInit{
  constructor(private http: HttpClient, private loginService: LoginService) { }
  private bearerToken = ""

  ngOnInit() {
    this.bearerToken = this.loginService.bearerToken
  }

  createAd(owner: string, title: string, description: string, price: number) {
    let body = {
      "owner": owner,
      "title": title,
      "description": description,
      "price": price
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.bearerToken
    })

    console.log("create ad", headers)
    return this.http.post("http://localhost:8080/ad", body, { headers: headers })
  }

  getAds() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.bearerToken
    })
    return this.http.get("http://localhost:8080/ad", { headers: headers })

  }
}
