import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientEditResolver } from 'src/app/_shared/resolvers/patient-edit.resolver';

const routes: Routes = [
    { path: 'patient/list', component: PatientsComponent },
    { path: 'patient/new', component: PatientComponent },
    { path: 'patient/edit/:id', component: EditPatientComponent, resolve: {patient: PatientEditResolver} },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PatientsRoutes {}
