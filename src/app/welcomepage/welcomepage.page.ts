import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user/user.service';
import { TranslateService } from '@ngx-translate/core';
import * as $ from "jquery";
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {

  language: any;
  country: any;

  constructor(public navctrl: NavController, public loadingcontroller: LoadingController, public router: Router, public userservice: UserService, public translateservice: TranslateService) {


  }

  setProfileData(user: any) {
    this.userservice.name = user.name;
    this.userservice.phone = user.phone;
    this.userservice.gender = user.gender;
    this.userservice.email = user.email;
    this.userservice.token = user.token;
    this.userservice.avatar = user.avatar;
    this.userservice.age = user.age;
    this.userservice.height = user.height;
    this.userservice.weight = user.weight;
    this.userservice.diseases = user.diseases;
  }


  ionViewWillEnter() {

    if (window.localStorage.getItem('appPatientSettings') !== null) {
      let settings = JSON.parse(window.localStorage.getItem('appPatientSettings'));
      this.userservice.appLanguage = settings.language;
      this.userservice.appCountry = settings.country;
      if (window.localStorage.getItem('userPatientInfo') !== null) {
        let data = JSON.parse(window.localStorage.getItem('userPatientInfo'));
        this.setProfileData(data);
        this.router.navigateByUrl("/");
      }
      this.router.navigateByUrl("/");
    }
  }

  ionViewDidEnter() {
    console.log("adadadad")
    let setLanguage = (x) => {
      this.language = x;
      this.translateservice.use(x);
      this.translateservice.setDefaultLang(x);
    }
    $(".language").click(function () {
      setLanguage($(this).attr("value"));
      $(".language").not(this).hide();
    });

    let setCountry = (y) => {
      this.country = y;
    }
    $(".country").click(function () {
      setCountry($(this).attr("value"));
      $(".country").not(this).hide();
    });
  }

  ngOnInit() {

  }

  // ionViewDidLoad() {

  // }

  gotologin() {
    this.userservice.appLanguage = this.language;
    this.userservice.appCountry = this.country;
    // for localStorage
    let appSettings = {
      language: this.userservice.appLanguage,
      country: this.userservice.appCountry
    }

    window.localStorage.setItem('appPatientSettings', JSON.stringify(appSettings));
    // end of save on localStorage
    this.presentLoading();
    this.navctrl.navigateForward("/")
  }

  async presentLoading() {
    let message = this.translateservice.instant('Please wait ...')
    const loading = await this.loadingcontroller.create({
      cssClass: 'my-custom-class',
      message: message,
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
