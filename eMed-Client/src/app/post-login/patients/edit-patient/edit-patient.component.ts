import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/_models/patient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/_services/patient_service/patient.service';
import { PnotifyService } from 'src/app/_services/pnotify_service/pnotify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patientForm: FormGroup;
  patient: Patient;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder, private patientService: PatientService,
    private pnotifyService: PnotifyService) {}

  ngOnInit() {
    this.initDatePicker();
    this.buildForm();
    this.loadUserData();
  }

  initDatePicker() {
    this.bsConfig = {
      containerClass: 'theme-dark-blue'
    };
  }

  loadUserData() {
    this.route.data.subscribe(data => {
      this.patient = data['patient'];
      this.assignValueToControls(this.patient);
    });
    console.log(this.patient.dateOfBirth);
  }

  buildForm() {
    this.patientForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: [null, Validators.required]
    });
  }

  assignValueToControls(patient: Patient) {
    this.patientForm.patchValue({
      id: patient.id || '',
      firstName: patient.firstName || '',
      lastName: patient.lastName || '',
      address: patient.address || '',
      email: patient.email || '',
      dateOfBirth: patient.dateOfBirth || '',
    });
  }

  updatePatientRecord() {
    if (this.patientForm.valid) {
      this.patient = Object.assign({}, this.patientForm.value);
      this.patientService.updatePatient(this.patient).subscribe(() => {
        this.pnotifyService.success('Success', 'Patient information has been updated successfully!');
        this.router.navigate(['/patient/list']);
      }, error => {
        this.pnotifyService.error('Error', error);
      });
    }
  }

  cancelRegistration() {

  }

}
