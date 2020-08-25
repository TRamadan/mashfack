import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/services/user/user.service';
import { Router } from '@angular/router';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  Registerform: FormGroup;
  selectedgender: any;
  // Gender = [{ id: 1, name: 'Male' }, { id: 2, name: 'Female' }];
  firstName: string; lastName: string; email: string; password: string; passwordConfirm: string; phone: string;
  age: number; height: number; weight: number; diseases: string;

  constructor(public translateservice: TranslateService, public googleplus: GooglePlus, public facebook: Facebook, public loadingController: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public userservice: UserService, public fb: FormBuilder, public router: Router) {
    // this.Gender;
  }

  ngOnInit() {
    // this.Registerform = this.fb.group({
    //   first_name: ['', Validators.required],
    //   last_name: ['', Validators.required],
    //   age: ['', Validators.required],
    //   diseases: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    //   weight: ['', Validators.required],
    //   password_confirmation: ['', Validators.required],
    //   phone: [null, [Validators.required, Validators.maxLength(11)]],
    //   gender: ['', Validators.required]
    // })
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

  OnRegister() {
    let user = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirmation: this.passwordConfirm,
      phone: this.phone,
      diseases: this.diseases,
      height: this.height,
      weight: this.weight,
      age: this.age,
      gender: $("#gender").val()

    }
    console.log(user.gender);
    console.log(user);
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.Registeration(user).subscribe(data => {
      console.log(data);
      this.DoneRegisteration();
      this.router.navigateByUrl("login")
      this.loadingController.dismiss();

    }, error => {
      let errors = error.error.errors;
      let errorMessage = "";

      for (let key in errors) {
        let text = errors[key][0];
        errorMessage += text + "<br/>";
      }

      let title = "Error Message!";
      this.ShowAlertError(errorMessage, title);
      this.loadingController.dismiss();

    })
  }

  // setProfileData(user: any) {
  //   this.userservice.name = user.name;
  //   this.userservice.phone = user.phone;
  //   this.userservice.gender = user.gender;
  //   this.userservice.email = user.email;
  //   this.userservice.token = user.token;
  //   this.userservice.avatar = user.avatar;
  //   this.userservice.age = user.age;
  //   this.userservice.height = user.height;
  //   this.userservice.weight = user.weight;
  //   this.userservice.diseases = user.diseases;
  // }


  // a function needed to present a toast on successfull registeration
  async DoneRegisteration() {
    let message = this.translateservice.instant('Done registeration , please login.');
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
    });
    toast.present();
  }

  async DoneRegisterationFB() {
    let message = this.translateservice.instant('Done registeration using facebook , enjoy our services.');
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
    });
    toast.present();
  }

  async DoneRegisterationgoogle() {
    let message = this.translateservice.instant('Done registeration using gmail , enjoy our services.')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'middle'
    });
    toast.present();
  }

  facebookRegister() {
    this.facebook.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        // alert(JSON.stringify(res));
        this.facebook.api('me?fields=id,email,name,first_name', []).then(profile => {
          const user = {
            accessToken: res.authResponse.accessToken,
            email: profile.email,
            first_name: profile.first_name,
            userId: res.authResponse.userID
          }
          // alert(JSON.stringify(user));
          let message = this.translateservice.instant('Please wait ... ')

          this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
            loadingElement.present();
          });
          this.userservice.socialLogin(user).subscribe(data => {
            this.loadingController.dismiss();
            this.DoneRegisterationgoogle();
            this.router.navigateByUrl("/");
          }, error => {
            // alert(JSON.stringify(error));
            console.log(error);
            this.loadingController.dismiss();
            this.ServerError();
          })
        })
      })
      .catch(e => alert('Error logging into Facebook' + JSON.stringify(e)));
    //   this.FB.logEvent(this.FB.EVENTS.EVENT_NAME_ADDED_TO_CART);
    console.log("function is fired")
  }

  GmailRegister() {
    this.googleplus.login({}).then(res => {
      const user = {
        accessToken: res.accessToken,
        email: res.email,
        first_name: res.givenName,
        userId: res.userId
      }
      let message = this.translateservice.instant('Please wait ... ')
      this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
        loadingElement.present();
      });
      this.userservice.socialLogin(user).subscribe(data => {
        console.log(data);
        this.loadingController.dismiss();
        this.router.navigateByUrl("/");
      }, error => {
        console.log(error);
        this.loadingController.dismiss();
        this.ServerError();

      })
    })
      .catch(err => alert(JSON.stringify(err)));
  }


  async ServerError() {
    let message = this.translateservice.instant('Internal server error , please try again.')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}
