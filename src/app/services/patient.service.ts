import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url = 'http://javaandreprojectfinal-env.eba-rj9hckem.us-east-2.elasticbeanstalk.com/api/v1/patients'
  findAllPatients = (): Promise<any> => {
    return fetch(this.url).then(response => response.json())
  }
  constructor() { }
}
