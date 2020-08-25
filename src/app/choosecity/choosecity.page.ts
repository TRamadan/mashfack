import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from "../../services/user/user.service";
import { DoctorService } from "../../services/doctor/doctor.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-choosecity',
  templateUrl: './choosecity.page.html',
  styleUrls: ['./choosecity.page.scss'],
})
export class ChoosecityPage implements OnInit {

  CitiesArray = [];

  constructor(public translateservice: TranslateService, public doctorservice: DoctorService, public toastCtrl: ToastController, public userservice: UserService, public loadingController: LoadingController, public router: Router) { }

  ngOnInit() {
    this.GetAllCities();
  }

  gotodoctors() {
    this.router.navigateByUrl("doctors");
  }

  GetAllCities() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.cities().subscribe(data => {
      this.CitiesArray = data;
      console.log(data)
      this.loadingController.dismiss()
      console.log(this.CitiesArray);
      console.log(data);
    }, error => {
      this.ServerError();
      console.log(error);
      this.loadingController.dismiss();
    })
  }

  setCity(x: any) {
    this.doctorservice.currentCity = x;
  }

  //handel server error 
  async ServerError() {
    let message = this.translateservice.instant('Internal server error , please try again')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
    });
    toast.present();
  }

  gotoreveal() {
    if (this.doctorservice.H == 1) {
      this.router.navigateByUrl("hospitals")
    }
    else if (this.doctorservice.C == 1) {
      this.router.navigateByUrl("clinics")
    }
    else if (this.doctorservice.D == 1) {
      this.router.navigateByUrl("labs")
    }
    else {
      this.router.navigateByUrl("revealtypes");
    }

  }
}
