import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private loginService: LoginService) { }
  token = ""
  username = ""
  title = 'frontend';
  ngOnInit() {
    this.loginService.loginData.subscribe((data) => {
      console.log("Subscription", data)
      this.username = data.username
      this.token = data.token
    })
  }
}
