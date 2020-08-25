import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from "../../services/doctor/doctor.service";
import { UserService } from "../../services/user/user.service";
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-finalpage',
  templateUrl: './finalpage.page.html',
  styleUrls: ['./finalpage.page.scss'],
})
export class FinalpagePage implements OnInit {

  name: any;
  address: any;
  speciality: any;
  title: any;
  info: any;
  waiting_time: any;
  phone: any;
  price: any;
  avatar: any;
  id: any;
  username: any;
  mobile: any;

  location_id: any;

  date: any;
  time: any;
  detection_type: any;

  constructor(public alertCtrl: AlertController, public translateservice: TranslateService, public userservice: UserService, public doctorservice: DoctorService, public router: Router) {
    this.address = doctorservice.address;
    this.name = doctorservice.name;
    this.avatar = doctorservice.avatar;
    this.title = doctorservice.title;
    this.phone = doctorservice.phone;
    this.price = doctorservice.price;
    this.speciality = doctorservice.speciality;
    this.info = doctorservice.info;
    this.waiting_time = doctorservice.waiting_time;

    this.username = doctorservice.bookername;
    this.mobile = doctorservice.bookerphone;
    this.id = doctorservice.id;
    this.location_id = doctorservice.location_id;
    this.time = doctorservice.time;
    this.date = doctorservice.bookDate;
    this.detection_type = doctorservice.currentReveal;


    console.log("location id ", this.location_id);
    console.log("doctor id ", this.id);
    console.log("booker name", this.username);
    console.log("booker phone", this.mobile);
    console.log("time", this.time);
    console.log("detectio type", this.detection_type);
    console.log("date", this.date);




  }

  ngOnInit() {
  }

  FinishBooking() {
    let bookingdata = {
      date: this.date,
      time: this.time,
      doctor_id: this.id,
      name: this.username,
      phone: this.mobile,
      detection_type: this.detection_type,
      location_id: this.location_id
    }
    this.doctorservice.book(bookingdata).subscribe(data => {
      console.log(data);
      this.DoneBooking();
      this.router.navigateByUrl("");
    }, error => {

      if (error.status == 422) {
        let errors = error.error.errors;
        let errorMessage = "";

        for (let key in errors) {
          let text = errors[key][0];
          errorMessage += text + "<br/>";
        }
        let title = this.translateservice.instant("Error Message!");
        this.ShowAlertError(errorMessage, title);
        console.log(error)
      }
    })
  }

  //here is a function needed to get validation error from backend
  async ShowAlertError(x: string, y: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: y,
      message: x,
      buttons: ['OK']
    });

    await alert.present();
  }

  //here is a function needed to get validation error from backend

  async DoneBooking() {
    let header = this.translateservice.instant('Done');
    let message = this.translateservice.instant('Successfull booking')
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
