import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }


  public loginData = new Subject<any>();
  public bearerToken = ""
  public userID = 0
  public isLoggedIn = false

  login(username: string, password: string) {

    let body = {
      "username": username,
      "password": password
    }
    return this.http.post(environment.URL + "login", body, { observe: 'response' })
  }

  getUserInfo(username: string) {
    let body = {
      "username": username,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.bearerToken
    })
    this.http.post(environment.URL + "info", body, { observe: 'response', headers: headers })
    .subscribe((resp) => {
      if (resp.status == 200) {
        this.isLoggedIn = true
        this.userID = resp.body["id"]
      } else {
        console.log("Improper login credentials")
      }
    })
  }

  setLogin(data: any) {
    this.loginData.next(data)
    console.log("LOGIN DATA", data)
    this.bearerToken = data.token

  }



  register(username: string, password: string) {
    let body = {
      "username": username,
      "password": password
    }
    return this.http.post(environment.URL + "registration", body)
  }
}
