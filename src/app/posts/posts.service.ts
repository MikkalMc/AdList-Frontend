import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient, private loginService: LoginService) { }

  createPost(title: string, description: string) {
    let bearerToken = this.loginService.bearerToken
    let userID = this.loginService.userID
    let body = {
      "userID": userID,
      "title": title,
      "description": description,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    })
    return this.http.post(environment.URL + "post", body, { headers: headers })
  }

  getPostsByUserID() {
    let bearerToken = this.loginService.bearerToken
    let userID = this.loginService.userID
    let params = new HttpParams().set("userID", userID.toString())
    console.log("Get Posts ", params)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    })

    return this.http.get(environment.URL + "post", { headers: headers, params: params })
  }

  deletePostByID(id) {
    let bearerToken = this.loginService.bearerToken
    let body = {
      "id": id,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': bearerToken
    })

    return this.http.post(environment.URL + "post/delete", body, { headers: headers })
  }
}
