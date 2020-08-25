import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user/user.service';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  forgotpasswordform: FormGroup;
  email: any;
  constructor(public translateservice: TranslateService, public loadingController: LoadingController, public toastCtrl: ToastController, public fb: FormBuilder, public router: Router, public userservice: UserService) {
  }

  ngOnInit() {
    this.forgotpasswordform = this.fb.group({
      email: ['', Validators.required]
    })
  }


  sendEmail() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.SendEmailCode(this.forgotpasswordform.controls.email.value).subscribe(data => {
      console.log(data);
      this.loadingController.dismiss();
      this.DoneEmailsent();
      this.router.navigateByUrl("forgotdetails")
    }, error => {
      this.loadingController.dismiss();
      this.ErrorHandler();
      console.log(error);
    })
  }

  //A function fired when an email has been sent successfully 
  async DoneEmailsent() {
    let message = this.translateservice.instant('We have e-mailed your password reset link!')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  async ErrorHandler() {
    let message = this.translateservice.instant('There is an erro occured , Please try again')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }



}
