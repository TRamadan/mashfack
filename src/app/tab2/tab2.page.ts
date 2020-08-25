import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import * as $ from 'jquery';
import { AlertController, ToastController, LoadingController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name: any; phone: any; gender: any; email: any; avatar: any; age: any; height: any; weight: any; diseases: any;

  firstName: string; lastName: string;

  rostatFile: any;
  header: any;

  constructor(public router: Router, public translateservice: TranslateService, public navCtrl: NavController, public loadingcontroller: LoadingController, public toastCtrl: ToastController, public http: HttpClient, public translate: TranslateService, public alertCtrl: AlertController, public userservice: UserService) {


    // this.firstName = userservice.name;
    // this.firstName = this.firstName.slice(0, this.firstName.indexOf(" ") + 1);
    // this.lastName = userservice.name;
    // this.lastName = this.lastName.slice(this.firstName.indexOf(" ") + 1, this.lastName.length);
    // this.name = userservice.name;
    // this.phone = userservice.phone;
    // this.gender = userservice.gender;
    // this.email = userservice.email;
    // this.avatar = userservice.avatar;
    // this.age = userservice.age;
    // this.weight = userservice.weight;
    // this.diseases = userservice.diseases;
    // this.firstName = userservice.name;
    // // this.firstName = this.firstName.slice(0, this.firstName.indexOf(" ") + 1);
    // this.lastName = userservice.name;
    // // this.lastName = this.lastName.slice(this.firstName.indexOf(" ") + 1, this.lastName.length);
    // this.name = userservice.name;
    // this.phone = userservice.phone;
    // this.gender = userservice.gender;
    // this.email = userservice.email;
    // this.avatar = userservice.avatar;
    // this.age = userservice.age;
    // this.height = userservice.height;
    // this.weight = userservice.weight;
    // this.diseases = userservice.diseases;
    // console.log("from user profile tab");

    this.header = userservice.header();
  }

  ionViewDidEnter() {
    this.firstName = this.userservice.name;
    this.firstName = this.firstName.slice(0, this.firstName.indexOf(" ") + 1);
    this.lastName = this.userservice.name;
    this.lastName = this.lastName.slice(this.firstName.indexOf(" ") + 1, this.lastName.length);
    this.name = this.userservice.name;
    this.phone = this.userservice.phone;
    this.gender = this.userservice.gender;
    this.email = this.userservice.email;
    this.avatar = this.userservice.avatar;
    this.age = this.userservice.age;
    // this.height = this.userservice.height;
    this.weight = this.userservice.weight;
    this.diseases = this.userservice.diseases;
  }
  ionViewDidLoad() {
    $("#uploadImage").click(function () {

      $("#uploadInput").click();
    })
    console.log('ionViewDidLoad ProfilePage');
  }

  changeListener(files) {
    this.rostatFile = files.item(0);
    console.log(this.rostatFile);
    this.uploadRostatFile();
  }

  ClickInput() {
    document.getElementById('uploadInput').click();
  }

  uploadRostatFile() {
    // let choosePic = this.translate.instant('Please Choose Pictures');
    if (!this.rostatFile) {
      this.EmptyImage()
    }
    let message = this.translateservice.instant('Please wait ...')
    this.loadingcontroller.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    const body = new FormData();
    body.append('avatar', this.rostatFile, this.rostatFile.name);
    this.http.post('http://al-eyada.com/api/v1/user_profile',
      body, this.header).subscribe((data) => {
        let userdata = JSON.parse(window.localStorage.getItem('userPatientInfo'));
        userdata.avatar = data;
        this.userservice.setProfileData(userdata)
        window.localStorage.setItem('userPatientInfo', JSON.stringify(userdata));
        console.log(userdata);
        console.log("here is the data from the uploaded profile picture", data);
        this.loadingcontroller.dismiss();
        this.doneupload();
        //navigate to home after chanege profile image
        this.router.navigateByUrl("");

        // let uploadDone = this.translate.instant('profile picture updated');
      }, (err) => {
        let error = this.translate.instant('Error');
        let message = this.translate.instant('Could not update profile picture');
        console.log(err);
        this.loadingcontroller.dismiss();
        this.UploadError();
      });
  }

  async doneupload() {
    let header = this.translateservice.instant('Done4');
    let message = this.translateservice.instant('Done update profile image');
    let buttons = this.translateservice.instant('Ok2');
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: [buttons]
    });
    await alert.present();
  }

  async UploadError() {
    let header = this.translateservice.instant('ِError');
    let message = this.translateservice.instant('Image can not be upload.');
    let buttons = this.translateservice.instant('Ok2');
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: [buttons]
    });
    await alert.present();
  }



  async EmptyImage() {
    let header = this.translateservice.instant('ِError');
    let message = this.translateservice.instant('Please choose image to upload.');
    let buttons = this.translateservice.instant('Ok2');
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: [buttons]
    });
    await alert.present();
  }


}


