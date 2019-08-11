import { AuthService } from './../../_services/auth_service/auth.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: "topnav-bar", // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './top-nav-bar.component.html'
})
export class TopNavBarComponent implements OnInit {
  // TypeScript public modifier

  constructor(public authService: AuthService) {}

  ngOnInit() {
    console.log('hello `topnavbar` componentggg');
  }

  diplayDropDown(event: MouseEvent) {
    // event.
   const result = $('#toggleDropdown');
    if (result) {
     result.addClass('open').removeClass('close');
      // console.log(result);
    } else {
      result.addClass('close').removeClass('open');
    }
  }

  logout() {
    this.authService.logout();
  }

  toggleClicked(event: MouseEvent) {
    let target = event.srcElement.id;
    let body = $('body');
    let menu = $('#sidebar-menu');

    // toggle small or large menu
    if (body.hasClass('nav-md')) {
      menu.find('li.active ul').hide();
      menu
        .find('li.active')
        .addClass('active-sm')
        .removeClass('active');
    } else {
      menu.find('li.active-sm ul').show();
      menu
        .find('li.active-sm')
        .addClass('active')
        .removeClass('active-sm');
    }
    body.toggleClass('nav-md nav-sm');
  }

  // ngAfterViewInit() {}
}
