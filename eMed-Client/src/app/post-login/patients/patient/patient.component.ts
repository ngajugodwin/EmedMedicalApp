import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/_models/patient';
import { PatientService } from 'src/app/_services/patient_service/patient.service';
import { PnotifyService } from 'src/app/_services/pnotify_service/pnotify.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: Patient;
  patientForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private fb: FormBuilder, private patientService: PatientService,
    private pnotifyService: PnotifyService, private router: Router
    // private datePipe: DatePipe
    ) { }

  ngOnInit() {
    this.initDatePicker();
    this.createPatientRegistration();
  }

  initDatePicker() {
    this.bsConfig = {
      containerClass: 'theme-dark-blue'
    };
  }

  createPatientRegistration() {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: [null, Validators.required]
    });
  }

  register() {
    if (this.patientForm.valid) {
      this.patient = Object.assign({}, this.patientForm.value);
      this.patientService.register(this.patient).subscribe(() => {
        this.pnotifyService.success('Success', 'New patient added successfully');
        this.patientForm.reset();
      }, error => {
        this.pnotifyService.error('Error', error);
      });
    }
  }

  cancelRegistration() {
    this.patientForm.reset(this.patient);
    this.pnotifyService.info('Info', 'Form has been reset');
    this.router.navigate(['/patient/list']);
  }
}
