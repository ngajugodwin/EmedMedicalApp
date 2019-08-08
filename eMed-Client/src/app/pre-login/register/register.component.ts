import { PnotifyService } from './../../_services/pnotify_service/pnotify.service';
import { AuthService } from './../../_services/auth_service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerData: any;

  constructor(private fb: FormBuilder, private router: Router,
              private authService: AuthService, private pnotifyService: PnotifyService) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
        this.registerData = Object.assign({}, this.registerForm.value);
        this.authService.register(this.registerData).subscribe(() => {
          this.pnotifyService.success('Success', 'Registration Successful');
        }, error => {
          this.pnotifyService.error('Error', 'Oops, something went wrong');
        });
    }
  }

  cancelRegistration() {
  }

}
