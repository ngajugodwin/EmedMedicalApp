import { Injectable } from '@angular/core';
import { Patient } from 'src/app/_models/patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PATIENT_URL } from 'src/app/_constants/api_constants/api.constant';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  register(patient: Patient) {
    return this.http.post(PATIENT_URL.CREATE, patient);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(PATIENT_URL.ALL_PATIENTS);
  }

  getPatient(id: number): Observable<Patient> {
     return this.http.get<Patient>(PATIENT_URL.GET_PATIENT + id);
  }

  updatePatient(patient: Patient) {
     return this.http.put(PATIENT_URL.UPDATE_PATIENT, patient);
  }

  deletePatient(id: number) {
    return this.http.delete(PATIENT_URL.DELETE_PATIENT + id);
  }

}
