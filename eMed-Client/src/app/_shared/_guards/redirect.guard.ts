import { AuthService } from './../../_services/auth_service/auth.service';
import { PnotifyService } from './../../_services/pnotify_service/pnotify.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // const url = this.router.url === '/';
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['/dashboard']);
        return true;
      }
      this.router.navigate(['/login']);
       return false;
  }
}
