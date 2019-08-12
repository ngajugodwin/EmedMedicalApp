import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buttonToggle() {
    this.registerMode = !this.registerMode;
  }

  getRoutePath() {
    console.log('hello');
    console.log('Package URL: ' + this.router.url);
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          console.log('this.router.url Path: ', this.router.url);
        }
      }
    );
  }

}
