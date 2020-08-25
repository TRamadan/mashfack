import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { UserService } from "../../services/user/user.service";
@Component({
  selector: 'app-xrays',
  templateUrl: './xrays.page.html',
  styleUrls: ['./xrays.page.scss'],
})
export class XraysPage implements OnInit {

  xraycenters: FormGroup;
  name: any;
  address: any;

  gender_id: any;

  form_name = "CenterForm";

  constructor(public userservice: UserService, public platform: Platform, public translateservice: TranslateService, public toastCtrl: ToastController, public fb: FormBuilder, public router: Router) {
    this.gender_id = this.platform.getQueryParam("gender_id");
    console.log(this.gender_id);
  }


  ngOnInit() {
    this.xraycenters = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }


  SendData() {
    if (this.xraycenters.controls.name.value == "" || this.xraycenters.controls.address.value == "") {
      this.ErrorInData()
    }

    else {
      let userdata = {
        name: this.xraycenters.controls.name.value,
        address: this.xraycenters.controls.address.value,
        gender_id: this.gender_id,
        form_name: this.form_name
      }
      console.log(userdata);
      this.userservice.SendFormVariable(userdata).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("");
        this.DoneSendingData();
        this.xraycenters.reset();
      }, error => {
        console.log(error);
      })
    }
    console.log("this function is fired")
  }

  //here is the successfull toast message 
  async DoneSendingData() {
    let message = this.translateservice.instant('Your information has been sent successfully')
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
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
