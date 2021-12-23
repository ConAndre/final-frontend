import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  constructor(private patientService: PatientService) {

  }

  patients : Patient[] = [
    // {name: 'andre', age: 22, date: new Date(), manufacturer: 'Moderna', dose: '1st'},
    // {name: 'bob', age: 2, date: new Date(1000), manufacturer: 'Pfyzer', dose: 'booster'},
  ];


  ngOnInit(): void {
    this.patientService.findAllPatients().then((patients: Patient[]) => this.patients = patients)
  }

}
