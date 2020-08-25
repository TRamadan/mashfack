import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from "../../services/user/user.service";
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm: FormGroup;

  email: string; password: string;
  constructor(public translateservice: TranslateService, public googleplus: GooglePlus, public facebook: Facebook, public loadingController: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController, public userservice: UserService, public fb: FormBuilder, public router: Router) { }

  ionViewWillEnter() {
    // to load data from local storage


  }


  /**
   * Programmer : Tarek Ahmed Ramadan
   * Purpose : make a function called set the loggined data for the user to his profile
   */
  setProfileData(user: any) {
    this.userservice.name = user.name;
    this.userservice.phone = user.phone;
    this.userservice.gender = user.gender;
    this.userservice.email = user.email;
    this.userservice.token = user.token;
    this.userservice.avatar = user.avatar;
    this.userservice.age = user.age;
    this.userservice.diseases = user.diseases;
  }

  ngOnInit() {
    if (window.localStorage.getItem('userPatientInfo') != null) {
      let data = JSON.parse(window.localStorage.getItem('userPatientInfo'));
      this.setProfileData(data);
      this.router.navigateByUrl("")
    }
  }

  public GmailLogin() {
    this.googleplus.login({}).then(res => {
      const user = {
        accessToken: res.accessToken,
        email: res.email,
        first_name: res.givenName,
        userId: res.userId
      }
      let message = this.translateservice.instant('Please wait ...')
      this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
        loadingElement.present();
      });
      this.userservice.socialLogin(user).subscribe(data => {
        console.log(data);
        // for local storage
        window.localStorage.setItem('userPatientInfo', JSON.stringify(data));
        // end of local storage
        this.setProfileData(data);
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
  public facebooklogin() {

    // alert("done")
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
          // alert(JSON.stringify(profile));

          // alert(JSON.stringify(user));
          let message = this.translateservice.instant('Please wait ...')

          this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
            loadingElement.present();
          });
          this.userservice.socialLogin(user).subscribe(data => {
            this.loadingController.dismiss();
            this.DoneLogin();
            window.localStorage.setItem('userPatientInfo', JSON.stringify(data));
            // end of local storage
            this.setProfileData(data);
            // alert("Done");
            this.router.navigateByUrl("/");
          }, error => {
            // alert(JSON.stringify(error));
            // alert(JSON.stringify(error));
            this.loadingController.dismiss();
            this.ServerError();
          })
        })
      })
      .catch(e => alert('Error logging into Facebook' + JSON.stringify(e)));
    //   this.FB.logEvent(this.FB.EVENTS.EVENT_NAME_ADDED_TO_CART);
    console.log("function is fired")
  }

  public OnLogin() {
    let user = {
      email: this.email,
      password: this.password
    }

    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.Login(user).subscribe(data => {
      console.log(data);
      this.DoneLogin();
      // for local storage
      window.localStorage.setItem('userPatientInfo', JSON.stringify(data));
      // end of local storage
      this.setProfileData(data);
      this.router.navigateByUrl("/")
      this.loadingController.dismiss();

    }, error => {
      console.log(error)
      if (error.status === 404) {
        let message = 'Email Or Password Wrong !! <br/> Please Try Again';
        this.loadingController.dismiss();
        this.ShowAlertError(message);
      }
      else if (error.status === 422) {
        let message = "Email Or Password is Empty !! <br/> Please Try Again";
        this.loadingController.dismiss();
        this.ShowAlertError(message);
      }
      else {
        this.ServerError();
      }
    })
  }

  //here is a function needed to get validation error from backend
  async ShowAlertError(x: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: x,
      buttons: ['OK']
    });
    await alert.present();
  }

  //on make successfull login 
  async DoneLogin() {
    let message = this.translateservice.instant('Done Login , Enjoy our services');
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async ServerError() {
    let message = this.translateservice.instant('Internal server error , please try again');
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  
  // googleLogin() {
  //   let loader = this.loadingCtrl.create();
  //   loader.present();
  //   this._GooglePlus.login({}).then(res => {
  //     // alert("here is the google response " + JSON.stringify(res));
  //     let user = {
  //       accessToken: res.accessToken,
  //       email: res.email,
  //       first_name: res.givenName,
  //       userId: res.userId
  //     }
  //     this._SignUpAndLoginProvider.socialLogin(user).subscribe(data => {
  //       // alert(JSON.stringify(data));
  //       loader.dismiss();
  //       // for local storage
  //       window.localStorage.setItem('userPatientInfo', JSON.stringify(data));
  //       // end of local storage
  //       this.setProfileData(data);
  //       this.fcm.getToken().then(token => {
  //         this._SignUpAndLoginProvider.fbToken(token).subscribe((data) => {
  //           // alert(JSON.stringify(data))
  //         });
  //       });

  //       this.navCtrl.pop();
  //     })
  //   })
  //     .catch(err => alert(JSON.stringify(err)));

  // }


}
