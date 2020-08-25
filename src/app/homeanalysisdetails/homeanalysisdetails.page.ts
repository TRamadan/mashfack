import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-homeanalysisdetails',
  templateUrl: './homeanalysisdetails.page.html',
  styleUrls: ['./homeanalysisdetails.page.scss'],
})
export class HomeanalysisdetailsPage implements OnInit {

  homeanalysis: FormGroup;

  gender_id: any;
  form_name = "HomeSemple";

  constructor(public userservice: UserService, public platform: Platform, public toastCtrl: ToastController, public router: Router, public fb: FormBuilder, public translateservice: TranslateService, ) {
    this.gender_id = this.platform.getQueryParam("gender_id");

  }

  ngOnInit() {
    this.homeanalysis = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }


  SendData() {
    if (this.homeanalysis.controls.name.value == "" || this.homeanalysis.controls.address.value == "") {
      this.ErrorInData()
    }
    else {
      let userdata = {
        name: this.homeanalysis.controls.name.value,
        address: this.homeanalysis.controls.address.value,
        gender_id: this.gender_id,
        form_name: this.form_name
      }
      this.userservice.SendFormVariable(userdata).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("");
        this.DoneSendingData();
        this.homeanalysis.reset()
      }, error => {
        console.log(error);
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
