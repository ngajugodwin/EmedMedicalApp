import { Observable, of } from 'rxjs';
import { PnotifyService } from './../../_services/pnotify_service/pnotify.service';
import { PatientService } from 'src/app/_services/patient_service/patient.service';
import { Patient } from 'src/app/_models/patient';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()

export class PatientEditResolver implements Resolve<Patient> {

    constructor(private patientService: PatientService, 
        private pnotifyService: PnotifyService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Patient> {
        return this.patientService.getPatient(route.params['id']).pipe(
            catchError(error => {
                this.pnotifyService.error('Error', 'Something went wrong retrieving data!');
                this.router.navigate(['/patient/list']);
                return of(null);
            })
        );
    }
}