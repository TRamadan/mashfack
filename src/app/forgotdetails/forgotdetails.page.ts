import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user/user.service';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-forgotdetails',
  templateUrl: './forgotdetails.page.html',
  styleUrls: ['./forgotdetails.page.scss'],
})
export class ForgotdetailsPage implements OnInit {

  forgotdata: FormGroup;
  constructor(public loadingController: LoadingController, public translateservice: TranslateService, public alertCtrl: AlertController, public fb: FormBuilder, public router: Router, public userservice: UserService, public toastCtrl: ToastController, public loadingcontroller: LoadingController) { }

  ngOnInit() {
    this.forgotdata = this.fb.group({
      email: ['', Validators.required],
      token: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    })
  }

  sendData() {
    let message = this.translateservice.instant('Please wait ...');
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.Forgotpasswordproceed(this.forgotdata.controls.email.value,
      this.forgotdata.controls.token.value, this.forgotdata.controls.password.value,
      this.forgotdata.controls.password_confirmation.value).subscribe(data => {
        console.log(data);
        this.loadingcontroller.dismiss();
        this.DoneForgotpassword();
        this.router.navigateByUrl("login");
      }, error => {
        let errors = error.error.errors;
        let errorMessage = "";

        for (let key in errors) {
          let text = errors[key][0];
          errorMessage += text + "<br/>";
        }

        let title = "Error Message!";
        this.loadingcontroller.dismiss();
        this.ErrorHandler(errorMessage);
        console.log(error);
      })
  }

  //This function is fired when there is a successfull request has been done 
  async DoneForgotpassword() {
    let message = this.translateservice.instant('You are changed your password successfully , please login')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }

  //handle error function 
  async ErrorHandler(x: any) {
    const toast = await this.toastCtrl.create({
      message: x,
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }

}
