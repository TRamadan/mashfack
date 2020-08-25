import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { DoctorService } from "../../services/doctor/doctor.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.page.html',
  styleUrls: ['./specialty.page.scss'],
})
export class SpecialtyPage implements OnInit {

  SpecialityArray = [];

  constructor(public translateservice: TranslateService, public doctorservice: DoctorService, public toastCtrl: ToastController, public loadingController: LoadingController, public router: Router, public userservice: UserService) { }

  ngOnInit() {
    this.GetAllSpecialities()
  }

  // here is a function needed to show all specialities
  GetAllSpecialities() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.specialties().subscribe(data => {
      console.log(data);
      this.SpecialityArray = data;
      console.log(this.SpecialityArray);
      this.loadingController.dismiss()
    }, error => {
      this.ServerError();
      this.loadingController.dismiss();
      console.log(error);
    })
  }

  //here is a function needed to handel error , when there is an error in the api or server error
  async ServerError() {
    let message = this.translateservice.instant('Internal server error , please try again')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
    });
    toast.present();
  }

  SetSpeciality(id: any) {
    this.doctorservice.currentSpecial = id;
    console.log(id);
    this.router.navigateByUrl("location");
    console.log("this function is fired");
  }
}
