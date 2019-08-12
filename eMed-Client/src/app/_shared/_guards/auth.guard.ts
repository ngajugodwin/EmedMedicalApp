import { AuthService } from './../../_services/auth_service/auth.service';
import { PnotifyService } from './../../_services/pnotify_service/pnotify.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private pnotifyService: PnotifyService,
    private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
      if (this.authService.isLoggedIn()) {
        return true;
      }
      this.pnotifyService.error('Error', 'You do not have sufficient permission to access the requested page');
      this.router.navigate(['/login']);
      return false;
  }
}
