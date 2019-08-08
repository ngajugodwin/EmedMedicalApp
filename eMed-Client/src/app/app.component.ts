import { AuthService } from './_services/auth_service/auth.service';
import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  loggedIn(): boolean {
    const response = this.authService.isLoggedIn();
    return response;
    // const token = localStorage.getItem('token');
    // return !!token; // if token is available return true, else false
  }
}
