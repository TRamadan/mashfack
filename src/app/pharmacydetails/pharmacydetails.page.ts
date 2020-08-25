import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { UserService } from "../../services/user/user.service";
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pharmacydetails',
  templateUrl: './pharmacydetails.page.html',
  styleUrls: ['./pharmacydetails.page.scss'],
})
export class PharmacydetailsPage implements OnInit {

  name: string;
  info: string;
  rostatFile: any;
  images = new Array();
  header: any;
  pharmaciesform: FormGroup;


  constructor(public fb: FormBuilder, public translateservice: TranslateService, public userservice: UserService, public loadingcontroller: LoadingController, public http: HttpClient, public toastCtrl: ToastController, public alertCtrl: AlertController) { }


  ngOnInit() {
    this.pharmaciesform = this.fb.group({
      name: ['', Validators.required],
      info: ['', Validators.required]
    })
  }


  ioniviewWillEnter() {

  }

  ionViewDidLoad() {
    this.header = this.userservice.header();
    console.log(this.header)
    $("#uploadimage").click(function () {

      $("#uploadinput").click();
    })
  }


  ClickInput() {
    document.getElementById('uploadinput').click();
  }

  changeListener(files) {
    this.rostatFile = files.item(0);
    console.log(this.rostatFile);
    this.uploadimage();
  }

  async ErrorImg() {
    const alert = await this.alertCtrl.create({
      header: 'Error message',
      message: 'Please upload your files',
      buttons: ['OK']
    });
    await alert.present();
  }

  uploadimage() {

    const body = new FormData();
    body.append('image', this.rostatFile, this.rostatFile.name);
    body.append('name', this.name);
    body.append('info', this.info);
    let message = this.translateservice.instant('Please wait ...')
    this.loadingcontroller.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.http.post('http://al-eyada.com/api/v1/pharmacies',
      body, this.header).subscribe((data) => {
        // this.images.push(data.path);
        this.loadingcontroller.dismiss();
        this.DoneImageUpload2();
      }, (err) => {
        this.ServerErrorMessage();
        console.log(err)
      });
  }



  uploadimage2() {
    const body = new FormData();
    body.append('image', this.rostatFile);
    body.append('name', this.name);
    body.append('info', this.info);
    let message = this.translateservice.instant('Please wait ...')
    this.loadingcontroller.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.http.post('http://al-eyada.com/api/v1/pharmacies',
      body, this.header).subscribe((data) => {
        // this.images.push(data.path);
        this.loadingcontroller.dismiss();
        this.DoneImageUpload();
      }, (err) => {
        this.ServerErrorMessage();
        this.loadingcontroller.dismiss();
        console.log(err)
      });
  }

  async DoneImageUpload() {
    let message = this.translateservice.instant('Your information has been sent successfully')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  async DoneImageUpload2() {
    let message = this.translateservice.instant('Your image uploaded successfully')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async ServerErrorMessage() {
    const toast = await this.toastCtrl.create({
      message: 'Image cannot be uploaded , please try again',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }




}

