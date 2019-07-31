import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientsComponent } from './patients.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutes } from './patients.routing';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PatientEditResolver } from 'src/app/_shared/resolvers/patient-edit.resolver';

@NgModule({
    declarations: [
        PatientsComponent,
        PatientComponent,
        EditPatientComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        PatientsRoutes,
        HttpClientModule,
        BsDatepickerModule.forRoot(),
    ],
    providers: [
        PatientEditResolver,
    ],
  })
  export class PatientsModule { }
