import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor/doctor.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-clinicsunderhostdrs',
  templateUrl: './clinicsunderhostdrs.page.html',
  styleUrls: ['./clinicsunderhostdrs.page.scss'],
})
export class ClinicsunderhostdrsPage implements OnInit {

  Doctors = [];
  name: any;
  phone: any;
  price: any;
  speciality: any;
  waiting_time: any;
  avatar: any;
  id: any;
  info: any;
  address: any;
  location_id: any;

  constructor(public translateservice: TranslateService, public toastCtrl: ToastController, public router: Router, public loadingController: LoadingController, public doctorservice: DoctorService) { }

  ngOnInit() {
    this.GetDrsUnderClinic();
  }



  addtofav(id: any) {
    const fav = {
      id: id,
      detection_type: this.doctorservice.currentReveal,
      type: this.doctorservice.category
    }
    console.log(fav);
    let message = this.translateservice.instant('Please wait ... ')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.favourite(fav).subscribe(data => {
      console.log(data);
      this.loadingController.dismiss();
      this.Doneaddtofav();
      console.log("this item is added to favoraits");
    }, error => {
      if (error.status === 401) {
        this.loadingController.dismiss();
        this.ServerError();
      }
      else if (error.status === 500) {
        this.loadingController.dismiss();
        this.ServerErrorforfav();
      }
      console.log(error);
    })
    console.log("function is fired")
  }

  GetDrsUnderClinic() {
    let message = this.translateservice.instant('Please wait ... ')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.hcDoctors().subscribe(data => {
      this.Doctors = data['doctors'];
      console.log(data);
      console.log(this.Doctors);
      this.loadingController.dismiss();
    })
  }

  setdrdata(doctor: any) {
    this.doctorservice.name = doctor.name;
    this.doctorservice.phone = doctor.phone;
    this.doctorservice.price = doctor.price;
    this.doctorservice.speciality = doctor.speciality;
    this.doctorservice.waiting_time = doctor.waiting_time;
    this.doctorservice.avatar = doctor.avatar
    this.doctorservice.info = doctor.info;
    this.doctorservice.id = doctor.id;
    this.doctorservice.address = doctor.address;
    this.doctorservice.location_id = doctor.location_id;
    console.log(this.doctorservice);
  }

  gotodrdetails(doctor: any) {
    this.setdrdata(doctor);
    console.log(doctor);
    this.router.navigateByUrl("doctordetails")
  }


  async Doneaddtofav() {
    let message = this.translateservice.instant('Doctor is added successfully')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  async ServerError() {
    const toast = await this.toastCtrl.create({
      message: 'Unauthorized , please login',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  async ServerError2() {
    let message = this.translateservice.instant('Internal server error , please try again')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  async ServerErrorforfav() {
    let message = this.translateservice.instant('This item is previously added')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }





}
