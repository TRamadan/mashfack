import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitalsandclinics',
  templateUrl: './hospitalsandclinics.page.html',
  styleUrls: ['./hospitalsandclinics.page.scss'],
})
export class HospitalsandclinicsPage implements OnInit {

  constructor(public router: Router, public doctorservice: DoctorService) {
    this.doctorservice.H = 0;
    this.doctorservice.C = 0;
  }

  ngOnInit() {
  }

  gotoHclinics() {
    this.doctorservice.H = 1;
    console.log(this.doctorservice.H);
    this.router.navigateByUrl("location");
  }

  gotoClinicsCenters() {
    this.doctorservice.C = 1;
    console.log(this.doctorservice.C);
    this.router.navigateByUrl("location");
  }



}
