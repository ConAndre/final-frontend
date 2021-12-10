import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient.model';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  constructor() {

  }

  patients : Patient[] = [
    {name: 'andre', age: 22, date: new Date(), manufacturer: 'Moderna'},
    {name: 'bob', age: 2, date: new Date(1000), manufacturer: 'Pfyzer'},
  ];


  ngOnInit(): void {
  }

}
