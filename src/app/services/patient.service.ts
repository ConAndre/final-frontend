import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  findAllPatients = (): Promise<any> => {
    return fetch('http://localhost:8080/api/patients').then(response => response.json())
  }
  constructor() { }
}
