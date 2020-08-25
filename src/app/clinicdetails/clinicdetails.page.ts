import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor.service';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-clinicdetails',
  templateUrl: './clinicdetails.page.html',
  styleUrls: ['./clinicdetails.page.scss'],
})
export class ClinicdetailsPage implements OnInit {

  Doctors = [];
  constructor(public translateservice: TranslateService, public doctorservice: DoctorService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.GetDrsUnderClinic()
  }

  GetDrsUnderClinic() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.clinicDoctors().subscribe(data => {
      this.Doctors = data;
      console.log(this.Doctors);
      this.loadingController.dismiss();
      console.log(data);
    })
  }

}
