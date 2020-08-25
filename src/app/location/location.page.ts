import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../services/user/user.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { DoctorService } from "../../services/doctor/doctor.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  GovernArray = [];
  constructor(public translateservice: TranslateService, public doctorservice: DoctorService, public loadingController: LoadingController, public toastCtrl: ToastController, public router: Router, public userservices: UserService) { }

  ngOnInit() {
    this.GetAllGovernments();
  }


  gotocity() {
    this.router.navigateByUrl("/choosecity")
  }


  setGovern(id: any) {
    this.doctorservice.currentGoverment = id;
  }

  GetAllGovernments() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.governorates().subscribe(data => {
      console.log(data);
      this.GovernArray = data;
      this.loadingController.dismiss();
      console.log(this.GovernArray)
    }, error => {
      this.ServerError()
      this.loadingController.dismiss();
      console.log(error);
    })
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


}
