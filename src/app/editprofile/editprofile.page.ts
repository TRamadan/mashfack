import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  // Gender = [{ id: 1, name: 'Male' }, { id: 2, name: 'Female' }];
  selectedgender: any;

  user: any;
  firstName: string; lastName: string; email: string; oldpassword: string; password: string; passwordConfirm: string; phone: string;
  age: number; height: number; weight: number; diseases: string; gender: any;
  name: string;

  constructor(public translateservice: TranslateService, public userservice: UserService, public loadingController: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public fb: FormBuilder, public router: Router) {
    this.firstName = userservice.name;
    this.firstName = this.firstName.slice(0, this.firstName.indexOf(" ") + 1);
    this.lastName = userservice.name;
    this.lastName = this.lastName.slice(this.firstName.indexOf(" ") + 1, this.lastName.length);
    // this.name = userservice.first_name + " " + userservice.last_name
    this.phone = userservice.phone;
    this.gender = userservice.gender;
    this.email = userservice.email;
    this.age = userservice.age;
    this.height = userservice.height;
    this.weight = userservice.weight;
    this.diseases = userservice.diseases;

  }

  ngOnInit() {

  }


  UpdateProfile() {
    this.gender = $("#gender").val();
    if ((this.passwordConfirm === "" || this.passwordConfirm === undefined) || (this.password === "" || this.password === undefined) || (this.oldpassword === "" || this.oldpassword === undefined)) {
      this.user = {
        name: this.firstName + " " + this.lastName,
        email: this.email,
        phone: this.phone,
        diseases: this.diseases,
        weight: this.weight,
        age: this.age,
        gender: this.gender
      }
    }
    else {
      this.user = {
        name: this.name,
        // first_name: this.firstName,
        // last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirm,
        old_password: this.oldpassword,
        phone: this.phone,
        diseases: this.diseases,
        height: this.height,
        weight: this.weight,
        age: this.age,
        gender: this.gender
      }
    }

    let message = this.translateservice.instant('Please wait ...');
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.UpdateProfile(this.user).subscribe(data => {
      console.log(data);
      this.loadingController.dismiss();
      this.doneupdate();
      window.localStorage.removeItem("userPatientInfo");
      this.router.navigateByUrl("login")
      console.log("done")
    }, error => {
      console.log(error)
    })
  }

  //present a successfull message for updating the profile 
  async doneupdate() {
    let message = this.translateservice.instant('Your profile has been updated , please login again')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  //client id
  //663177833447-j1o31s94e6lkgphbb0pjq3crq7qjr313.apps.googleusercontent.com

}
