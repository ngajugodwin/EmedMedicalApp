import { PnotifyService } from './../../_services/pnotify_service/pnotify.service';
import { AuthService } from './../../_services/auth_service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = true;
  loginForm: FormGroup;
  loginData: any;

  constructor(private router: Router, private fb: FormBuilder,
    private authService: AuthService, private pnotifyService: PnotifyService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
     // do something
     this.loginData =  Object.assign({}, this.loginForm.value);
     this.authService.login(this.loginData).subscribe(response => {
        this.pnotifyService.success('Success', 'Login successful');
        this.router.navigate(['/dashboard']);
     }, error => {
       this.pnotifyService.error('Unauthorize', error);
     });
    }
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token; // if token is available return true, else false
  }

  logout() {
    localStorage.removeItem('token');
    this.pnotifyService.info('Success', 'You have successfully logged out');
  }

  registerNavigate() {
    this.router.navigate(['register']);
  }

}
