import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = ""
  public password = ""
  public isRegister = false

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(e: Event) {
    e.preventDefault();
    // console.log(this.username, this.password);
    this.loginService.login(this.username, this.password)
      .subscribe(
        (el) => {
          if (el.headers.get("authorization") != null) {
            let loginData = {
              username: this.username,
              password: this.password,
              token: el.headers.get("authorization"),
              isLoggedIn: true
            }
            this.loginService.setLogin(loginData)
          }
          this.loginService.getUserInfo(this.username)
        }
      )
  }

  switchIsRegister(e: Event) {
    e.preventDefault()
    this.isRegister = !this.isRegister
  }

  register(e: Event) {
    e.preventDefault();

    this.loginService.register(this.username, this.password)
      .subscribe((el) => {
      })
  }
}
