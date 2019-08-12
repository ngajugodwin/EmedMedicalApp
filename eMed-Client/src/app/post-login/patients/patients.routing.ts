import { RedirectGuard } from './../../_shared/_guards/redirect.guard';
import { AuthGuard } from './../../_shared/_guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientEditResolver } from 'src/app/_shared/resolvers/patient-edit.resolver';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from 'src/app/pre-login/home/home.component';
import { LoginComponent } from 'src/app/pre-login/login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [RedirectGuard] },
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'patient/list', component: PatientsComponent },
        { path: 'patient/new', component: PatientComponent },
        { path: 'patient/edit/:id', component: EditPatientComponent, resolve: {patient: PatientEditResolver} },
        { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
      ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard, RedirectGuard
  ],
  exports: [
    RouterModule
  ]
})

export class PatientsRoutes {}
