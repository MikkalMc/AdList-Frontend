import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }

  // public loginData = {
  //   username: "",
  //   password: "",
  //   token: "",
  //   isLoggedIn: false
  // }

  public loginData = new Subject<any>();

  login(username: string, password: string) {

    let body = {
      "username": username,
      "password": password
    }
    return this.http.post("http://localhost:8080/login", body, { observe: 'response' })
  }

  setLogin(data: any) {
    this.loginData.next(data)
    // this.loginData = data;
  }

  register(username: string, password: string) {
    let body = {
      "username": username,
      "password": password
    }
    return this.http.post("http://localhost:8080/registration", body)
  }
}
