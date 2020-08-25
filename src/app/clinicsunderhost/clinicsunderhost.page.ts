import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-clinicsunderhost',
  templateUrl: './clinicsunderhost.page.html',
  styleUrls: ['./clinicsunderhost.page.scss'],
})
export class ClinicsunderhostPage implements OnInit {

  Clinics = [];
  Clinics2 = [];
  id: any;
  constructor(public translateservice: TranslateService, public router: Router, public loadingController: LoadingController, public docterservice: DoctorService) { }

  ngOnInit() {
    this.GetClinics();
  }

  GetClinics() {
    let message = this.translateservice.instant('Please wait ... ')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.docterservice.ClinicsUnderHospitals().subscribe(data => {
      this.Clinics = data;
      this.Clinics2 = data['clinics'];
      this.loadingController.dismiss();
      console.log(this.Clinics);
      console.log(this.Clinics);
      console.log(data);
    }, error => {
      console.log(error);
      this.loadingController.dismiss();
    })
  }

  gotodoctorsunderclinic(id: any) {
    this.docterservice.currentHClinic = id;
    console.log(this.docterservice.currentHClinic);
    console.log("function is fired");
    this.router.navigateByUrl("clinicsunderhostdrs");
  }

}
