import { PnotifyService } from 'src/app/_services/pnotify_service/pnotify.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from 'src/app/_services/patient_service/patient.service';

declare var require: any;
let $ = require( 'jquery' );
let dt = require( 'datatables.net' );


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  @ViewChild('dataTable') table;
  dataTable: any;

  constructor(private patientService: PatientService, private pnotifyService: PnotifyService) {
    this.loadPatientsWithDataTable();
  }

  ngOnInit() {
  }

  loadPatients() {
     this.patientService.getPatients().subscribe((patients: Patient[]) => {
      this.patients = patients;
    }, error => {
      this.pnotifyService.error('Error', 'Unable to fetch data from server');
      // this.pnotifyService.error('Error', error);
    }
    );
  }

  loadPatientsWithDataTable() {
    this.loadPatients();

    setTimeout(function () {
      $(function () {
        $('#dataTable').DataTable();
      });
    }, 3000);
  }

  deletePatient(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.patientService.deletePatient(id).subscribe(res => {
        console.log(id);
        // this.loadPatients();
        this.loadPatientsWithDataTable();
        this.pnotifyService.success('Success', 'Patient deleted successfully');
      });
     }
  }
}
