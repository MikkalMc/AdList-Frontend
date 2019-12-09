import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }


  public loginData = new Subject<any>();
  public bearerToken = ""
  public userId = 0
  public isLoggedIn = false

  login(username: string, password: string) {

    let body = {
      "username": username,
      "password": password
    }
    return this.http.post("http://localhost:8080/login", body, { observe: 'response' })
  }

  getUserInfo(username: string) {
    let body = {
      "username": username,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.bearerToken
    })
    console.log("hhhh", this.bearerToken)
    this.http.post("http://localhost:8080/info", body, { observe: 'response', headers: headers })
    .subscribe((resp) => {
      if (resp.status == 200) {
        this.isLoggedIn = true
        this.userId = resp.body["id"]
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
    return this.http.post("http://localhost:8080/registration", body)
  }
}
