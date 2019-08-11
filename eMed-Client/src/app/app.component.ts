import { AuthService } from './_services/auth_service/auth.service';
import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.initProfileName();
  }

  initProfileName() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }

  loggedIn(): boolean {
    const response = this.authService.isLoggedIn();
    return response;
    // const token = localStorage.getItem('token');
    // return !!token; // if token is available return true, else false
  }
}
