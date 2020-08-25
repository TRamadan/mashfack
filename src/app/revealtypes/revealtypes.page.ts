import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user/user.service";
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DoctorService } from "../../services/doctor/doctor.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-revealtypes',
  templateUrl: './revealtypes.page.html',
  styleUrls: ['./revealtypes.page.scss'],
})
export class RevealtypesPage implements OnInit {

  Reveals: any = new Array();
  category: any;

  constructor(public translateservice: TranslateService, public doctorservice: DoctorService, public loadingController: LoadingController, public userservice: UserService, public router: Router) {
    this.category = this.doctorservice.category;
    console.log(this.category)
  }

  ngOnInit() {
    this.GetAllReveals();

  }
  ionViewDidLoad() {
  }

  GetAllReveals() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.reveals().subscribe((data) => {
      console.log(data);
      for (let i = 0; i <= 1; i++) {
        this.Reveals.push(data.data[i]);
      }
      console.log(this.Reveals)
      this.loadingController.dismiss();
      console.log(this.Reveals);
    })
  }

  SetReveal(id: any, name: any) {
    this.doctorservice.currentReveal = id;
    this.doctorservice.bookType = id;
    this.doctorservice.name = name;
    console.log(this.doctorservice.currentReveal);
    console.log(this.doctorservice.bookType);
    console.log(this.doctorservice.name);
  }


  gotodrdetils() {
    if (this.doctorservice.category == 2) {
      console.log(this.doctorservice.category);
      this.router.navigateByUrl("labsdepartments")
    }
    else {
      this.router.navigateByUrl("doctors");
    }

  }

}
