import { DashboardComponent } from './post-login/dashboard/dashboard.component';
import { LoginComponent } from './pre-login/login/login.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoContentComponent } from './global/no-content/no-content.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { TopNavBarComponent } from './menu/top-nav-bar/top-nav-bar.component';
import { FontAwesomeDirective } from 'ng2-fontawesome';
import { Footer } from './global/footer/footer.component';
import { NetworkActivitiesComponent } from './content/network-activities/network-activities.component';
import * as jQuery from 'jquery';
// import { PatientsComponent } from './patients/patients.component';
import { PatientsModule } from './post-login/patients/patients.module';
import { HttpClientModule } from '@angular/common/http';
import { PatientsRoutes } from './post-login/patients/patients.routing';
import { PatientComponent } from './post-login/patients/patient/patient.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
export const AppRoutes2: Routes = [
//   { path: '', component: ContentComponent },
//   { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: '', component: LoginComponent},
  { path: 'content', component: ContentComponent },
  { path: 'dashboard', component: DashboardComponent },

  /*{ path: 'inbox',  component: Inbox },
  { path: 'about', component: About },*/
  { path: '**', component: NoContentComponent }
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
      // PatientsComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(AppRoutes2, {useHash: false}),
      HttpClientModule,
      PatientsModule,
   ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
