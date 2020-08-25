import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.page.html',
  styleUrls: ['./laboratories.page.scss'],
})
export class LaboratoriesPage implements OnInit {

  name: any;
  address: any;

  labforms: FormGroup;

  gender_id: any;
  form_name = "LabratoryForm";

  constructor(public userservice: UserService, public platform: Platform, public router: Router, public fb: FormBuilder, public translateservice: TranslateService, public loadingcontroller: LoadingController, public toastCtrl: ToastController) {
    this.gender_id = this.platform.getQueryParam("gender_id");
  }



  ngOnInit() {
    this.labforms = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }


  SendData() {
    if (this.labforms.controls.name.value == "" || this.labforms.controls.address.value == "") {
      this.ErrorInData()
    }
    else {
      let userdata = {
        name: this.labforms.controls.name.value,
        address: this.labforms.controls.address.value,
        gender_id: this.gender_id,
        form_name: this.form_name
      }
      this.userservice.SendFormVariable(userdata).subscribe(data => {
        this.router.navigateByUrl("");
        this.DoneSendingData();
        this.labforms.reset();
      }, error => {
        if (error.status == 422) {
          this.ErrorInData();
        }
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
