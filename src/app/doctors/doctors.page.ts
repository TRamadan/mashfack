import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { DoctorService } from "../../services/doctor/doctor.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  Results = [];
  Services = new Array();
  Languages = new Array();

  name: any;
  avatar: any;
  speciality: any;
  phone: any;
  title: any;
  address: any;
  waiting_time: any;
  price: any;
  info: any;
  locationID: any;


  id: any;
  detection_type: any;
  type: any
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;



  constructor(public translateservice: TranslateService, public navCtrl: NavController, public doctorservice: DoctorService, public toastCtrl: ToastController, public loadingController: LoadingController, public router: Router, public userservice: UserService) {
    //Item object for Nature
    this.id = this.doctorservice.id;
    this.detection_type = this.doctorservice.bookType;
    this.type = this.doctorservice.category;
    console.log(this.id);
    console.log(this.detection_type);
    console.log(this.type);

  }

  ngOnInit() {
    this.GetAllDoctors();
  }

  //here is the function needed to pass more doctor info to doctor details page
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

  addtofav(id: any) {
    if (this.userservice.token == "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmNDVhNTg1Y2U2NDJlODFjYzFhY2I1MDU1ZmMwYjg4NDU2NjRhOWNmYmI0ODRiZTQ2Nzk1MGE5NmY0NGNhZmM1NTVlYzAyZmU1MDYwYzExIn0.eyJhdWQiOiIyIiwianRpIjoiNWY0NWE1ODVjZTY0MmU4MWNjMWFjYjUwNTVmYzBiODg0NTY2NGE5Y2ZiYjQ4NGJlNDY3OTUwYTk2ZjQ0Y2FmYzU1NWVjMDJmZTUwNjBjMTEiLCJpYXQiOjE1ODU1NzQ1MjUsIm5iZiI6MTU4NTU3NDUyNSwiZXhwIjoxNjE3MTEwNTI1LCJzdWIiOiIxNDEiLCJzY29wZXMiOltdfQ.l65eaXMZD7ADAElhreAIiKCADNyaJSSva_6HI-0YuSyUftIrX61RrQ4GC4fmgLZLyRaC7Gp9nCjHfadKgXy7iogSG57Bl3_e650Go-EDZhr4iCcz9B3Cy-NXTPcGABjPyOLcwCjIxfTNsS6_IjEDePQ1JEKMd0bwFQbS_pomWTLgjnyDF1BVFG0AZX5bGWP6t7Rs_sQYPHuSaLxWmVIHL6YLeXrMuRrEBvHY9bSz8y-8AP4oIv9UO4rveu5ZOpXYzSPIoryU63pMt1Xd_P89bNsZpbieYZ7tykHMFn8BZpWaEL0OvSlB5PY9fOZ1YXRwpZ6XT5RnbC1KLpc9Ig44UBaF8P-lq7D49qzHCB08w6JBBA5rJxJW6Q499azqE5L1Kr3vUCte7UlYmEdX2Dz4xaVECphv3BzZ8aD1XaItPmb2Qy9M1Uqq7KZm8EXPEQOiuitAgXX0GhVrUgd7BvqrqUe8Bb636iSQ_Fk7jwvcuox2ItQ-jEnlbslWN9vXGcm_9jWfeNivFngc5mKY3xsFOVrEBTLWestOkuUYa0JksylccFkgVXy10LIq0-D7n1ArSb5llUS7TrQBRodxVq9qdKXSmy47TNkgJHmddijex5c46o0uFfo7aP19hNtXSuf8-wgLVBvocEvegbRCyaPMHSPKb-gti1TG3FJOhp0lUPc") {
      this.router.navigate(["login"])
    }
    else {
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
        // this.router.navigateByUrl("tabs/tab4");
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
  }

  rate(id: any) {
    this.id = id;
    console.log(this.id);
    console.log("this function is fired");
    this.router.navigateByUrl("evaluation?id=" + id)
  }

  GetAllDoctors() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.filteration().subscribe((data) => {
      this.Results = data;
      this.loadingController.dismiss();
      console.log(this.Results);
      console.log(data);
    }, error => {
      if (error.status === 401) {
        this.ServerError();
      }
      else if (error.status === 500) {
        this.ServerError2();
      }
      console.log(error);
    })
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
    let message = this.translateservice.instant('Internal server error , please try again');
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

  //here is the function needed to add the selected dr to the favoraits 




}
