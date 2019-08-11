// Component
import { HomeComponent } from './pre-login/home/home.component';
import { DashboardComponent } from './post-login/dashboard/dashboard.component';
import { LoginComponent } from './pre-login/login/login.component';
import { RegisterComponent } from './pre-login/register/register.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { NoContentComponent } from './global/no-content/no-content.component';
import { ContentComponent } from './content/content.component';
import { TopNavBarComponent } from './menu/top-nav-bar/top-nav-bar.component';
import { Footer } from './global/footer/footer.component';
import { NetworkActivitiesComponent } from './content/network-activities/network-activities.component';
import { PatientComponent } from './post-login/patients/patient/patient.component';
// import { PatientsComponent } from './patients/patients.component';

// Routes
import { PatientsRoutes } from './post-login/patients/patients.routing';

// Service
import { AuthService } from './_services/auth_service/auth.service';


// Module
import * as jQuery from 'jquery';
// import { BsDropdownModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeDirective } from 'ng2-fontawesome';
import { PatientsModule } from './post-login/patients/patients.module';
import { HttpClientModule } from '@angular/common/http';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorInterceptorProvider } from './_services/auth_service/error.interceptor';

export const AppRoutes2: Routes = [

//   { path: '', component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}


  /*{ path: 'inbox',  component: Inbox },
  { path: 'about', component: About },*/
 // { path: '**', component: NoContentComponent }
];

@NgModule({
   declarations: [
      AppComponent,
      SidebarComponent,
      NoContentComponent,
      ContentComponent,
      LoginComponent,
      DashboardComponent,
      TopNavBarComponent,
      FontAwesomeDirective,
      Footer,
      NetworkActivitiesComponent,
      RegisterComponent,
      HomeComponent
      // PatientsComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(AppRoutes2, {useHash: false}),
      HttpClientModule,
      PatientsModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      // BsDropdownModule.forRoot()
   ],

  providers: [AuthService, ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
