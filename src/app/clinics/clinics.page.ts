import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from "../../services/doctor/doctor.service";
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.page.html',
  styleUrls: ['./clinics.page.scss'],
})
export class ClinicsPage implements OnInit {

  Clinics = [];
  constructor(public router: Router, public doctorservice: DoctorService, public loadingcontroller: LoadingController) { }

  ngOnInit() {
    this.GetAllClinics();
  }

  GetAllClinics() {
    this.loadingcontroller.create({ spinner: 'bubbles', message: 'Please wait ... ' }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.clinicCenters().subscribe(data => {
      this.Clinics = data;
      console.log(this.Clinics)
      this.loadingcontroller.dismiss();
      console.log(data);
    })
  }

  gotoclinicsdetails(id: any) {
    this.doctorservice.currentClinicCenter = id;
    console.log(this.doctorservice.currentClinicCenter);
    this.router.navigateByUrl("clinicdetails");
  }





}
