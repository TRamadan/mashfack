import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { UserService } from "../../services/user/user.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  changepasswordform: FormGroup;

  ShowPassword: boolean = false;
  PasswordToggleicon = 'eye';

  oldpassword: string; password: string; passwordConfirm: string;
  email: string;
  password2: string;

  constructor(public loadingController: LoadingController, public translateservice: TranslateService, public fb: FormBuilder, public router: Router, public toastCtrl: ToastController, public userservice: UserService) {
    this.email = userservice.email;
    this.password = userservice.password
    console.log(this.password);
    console.log(this.email);
  }

  ngOnInit() {
    this.changepasswordform = this.fb.group({
      email: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      old_password: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.SetEmailValue()
  }

  SetEmailValue() {
    this.changepasswordform.controls.email.setValue(this.userservice.email);
  }

  UpdatePassword() {
    if (this.changepasswordform.controls.password.value == '' || this.changepasswordform.controls.old_password.value == '' || this.changepasswordform.controls.password_confirmation.value == '') {

    }
    const userdata = {
      email: this.changepasswordform.controls.email.value,
      password: this.changepasswordform.controls.password.value,
      old_password: this.changepasswordform.controls.old_password.value,
      password_confirmation: this.changepasswordform.controls.password_confirmation.value
    }
    console.log(userdata)
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.UpdateProfile(userdata).subscribe(data => {
      console.log(data);
      this.DonePasswordChange();
    }, error => {
      console.log(error);
      if (error.status == 403) {
        this.ErrorInData();
        this.loadingController.dismiss();
      }
    })
    console.log("this function is fired")
  }

  passwordtoggle() {
    this.ShowPassword = !this.ShowPassword;
    if (this.PasswordToggleicon == 'eye') {
      this.PasswordToggleicon = 'eye-off';
    }
    else {
      this.PasswordToggleicon = 'eye';
    }
    console.log("this function is fired")
  }

  //show a success message when the password is successfully changed 
  async DonePasswordChange() {
    let message = this.translateservice.instant('Your password has been changed , please login again')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
    this.router.navigateByUrl("login")
  }

  async ErrorInData() {
    let message = this.translateservice.instant('All the needed data is required')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

}
