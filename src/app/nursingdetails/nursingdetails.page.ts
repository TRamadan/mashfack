import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, ToastController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-nursingdetails',
  templateUrl: './nursingdetails.page.html',
  styleUrls: ['./nursingdetails.page.scss'],
})
export class NursingdetailsPage implements OnInit {

  nursingform: FormGroup;

  name: any;
  address: any;

  gender_id: any;
  form_name = "Nurse";

  constructor(public userservice: UserService, public platform: Platform, public fb: FormBuilder, public router: Router, public translateservice: TranslateService, public loadingcontroller: LoadingController, public toastCtrl: ToastController) {
    this.gender_id = this.platform.getQueryParam("gender_id");
    console.log(this.gender_id);
  }

  ngOnInit() {
    this.nursingform = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }



  SendData() {
    if (this.nursingform.controls.name.value == "" || this.nursingform.controls.address.value == "") {
      this.ErrorInData()
    }
    else {
      let userdata = {
        name: this.nursingform.controls.name.value,
        address: this.nursingform.controls.address.value,
        gender_id: this.gender_id,
        form_name: this.form_name
      }
      console.log(userdata);
      this.userservice.SendFormVariable(userdata).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("");
        this.DoneSendingData();
        this.nursingform.reset();
      }, error => {
        if (error.status == 422) {
          this.ErrorInData();
        }
      })

    }
    console.log("this function is fired")
  }

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
