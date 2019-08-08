import { Router } from '@angular/router';
import { PnotifyService } from 'src/app/_services/pnotify_service/pnotify.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH_URL } from 'src/app/_constants/api_constants/api.constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient, private pnotifyService: PnotifyService,
            private router: Router) { }

  login(loginData: any) {
    return this.http.post(AUTH_URL.LOGIN, loginData).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // if token is available return true, else false
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.pnotifyService.info('Success', 'You have successfully logged out');
  }

  register(registerData: any) {
    return this.http.post(AUTH_URL.REGISTER, registerData);
  }
}
