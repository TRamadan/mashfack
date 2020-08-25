import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit {

  Hospitals = [];
  searchTerm: any;
  id: any;

  constructor(public translateservice: TranslateService, public router: Router, public doctorservice: DoctorService, public loadingcontroller: LoadingController) { }

  ngOnInit() {
    this.GetAllHospitals();
    // this.SearchForHospitals();
  }

  GetAllHospitals() {
    let message = this.translateservice.instant('Please wait ... ')
    this.loadingcontroller.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.hospitales().subscribe(data => {
      this.Hospitals = data;
      this.loadingcontroller.dismiss();
      console.log(data);
      console.log(this.Hospitals)
    }, error => {
      console.log(error)
    })
  }

  SearchForHospitals() {
    let message = this.translateservice.instant('Please wait ... ')
    this.loadingcontroller.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.hSearch(this.searchTerm).subscribe(data => {
      console.log(data);
      this.loadingcontroller.dismiss();
    })
  }

  gotoclinicsunderhost(id: any) {
    this.doctorservice.currentHospital = id;
    console.log(id);
    this.router.navigateByUrl("clinicsunderhost");
  }

}
