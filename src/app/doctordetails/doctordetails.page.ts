import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DoctorService } from "../../services/doctor/doctor.service";
import { UserService } from "../../services/user/user.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.page.html',
  styleUrls: ['./doctordetails.page.scss'],
})
export class DoctordetailsPage implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

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

  IsDateSelected: boolean = false;
  IsPeriodSelected: boolean = false;

  location_id: any;
  work_days = [];
  Dates: any;

  times = [];
  form_to = [];

  workday_id: any;
  date: any;

  Times = [];

  time: any;

  constructor(public alertController: AlertController, public translateservice: TranslateService, public userservice: UserService, public toastCtrl: ToastController, public loadingController: LoadingController, public router: Router, public doctorservice: DoctorService) {
    this.address = doctorservice.address;
    this.id = doctorservice.id;
    this.name = doctorservice.name;
    this.avatar = doctorservice.avatar;
    this.title = doctorservice.title;
    this.phone = doctorservice.phone;
    this.price = doctorservice.price;
    this.speciality = doctorservice.speciality;
    this.info = doctorservice.info;
    this.waiting_time = doctorservice.waiting_time;
    this.location_id = doctorservice.location_id;
    this.username = userservice.name;
    this.mobile = userservice.phone;

    console.log(doctorservice);
  }

  ngOnInit() {
    this.GetAllDates();
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 995
          },
          {
            id: 925
          },
          {
            id: 940
          },
          {
            id: 943
          },
          {
            id: 944
          }
        ]
      };
    //Item object for Food
    this.sliderTwo =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 324
          },
          {
            id: 321
          },
          {
            id: 435
          },
          {
            id: 524
          },
          {
            id: 235
          }
        ]
      };
    //Item object for Fashion
    this.sliderThree =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 643
          },
          {
            id: 532
          },
          {
            id: 232
          },
          {
            id: 874
          },
          {
            id: 193
          }
        ]
      };
  }

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 1,
    slidesPerView: 2,
    autoplay: false,
    centeredSlides: true,
    spaceBetween: 5
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: false,
    centeredSlides: true,
    spaceBetween: 5
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3,
    centeredSlides: true
  };
  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  gotodrdetails() {
    console.log("this function is fired")
  }

  choosedate(dates: any) {
    this.Times = [];
    this.date = dates;

    this.IsDateSelected = true;
    this.form_to = this.Dates[dates];
    console.log("from and to", this.form_to)
    console.log(this.Dates[dates]);
  }

  choosetime(t: any) {
    this.doctorservice.time = t;
    console.log(this.doctorservice.time);
  }

  chooseperiod(id: any) {
    this.IsPeriodSelected = true;
    this.workday_id = id;
    this.GetAllVisitTimes();

    // console.log(this.Dates[dates]);
  }

  //empty fields for username and mobile number if the booking is for another person 
  async presentAlert() {
    let message = this.translateservice.instant('You must fill patient name and patient phone')
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  gotofinal() {
    this.doctorservice.bookername = this.username
    this.doctorservice.bookerphone = this.mobile
    if (this.username == undefined || this.username == '' || this.mobile == undefined || this.mobile == '') {
      this.presentAlert()
    }
    else {
      this.router.navigateByUrl("finalpage");
    }
  }

  addtofav(id: any) {
    const fav = {
      id: id,
      detection_type: this.doctorservice.currentReveal,
      type: this.doctorservice.category
    }
    console.log(fav);
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.favourite(fav).subscribe(data => {
      console.log(data);
      this.loadingController.dismiss();
      this.Doneaddtofav();
      this.router.navigateByUrl("tabs/tab4");
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

  async Doneaddtofav() {
    let message = this.translateservice.instant('Doctor is added successfully')
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

  async ServerError() {
    const toast = await this.toastCtrl.create({
      message: 'Unauthorized , please login',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  GetAllDates() {
    this.doctorservice.Dates().subscribe((data) => {
      console.log(data);
      let work = Object.keys(data);
      this.work_days = work;
      this.Dates = data;
      //console.log(this.Dates);
    }, error => {
      console.log(error);
    })
  }

  GetAllVisitTimes() {
    this.doctorservice.bookDate = this.date;
    this.doctorservice.bookRange = this.workday_id;
    this.doctorservice.visitTimes().subscribe(data => {
      console.log(data);
      this.Times = data;
      console.log(this.Times);
    }, error => {
      console.log(error);
    })
  }
}
