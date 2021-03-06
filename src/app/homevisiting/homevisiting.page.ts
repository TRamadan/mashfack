import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-homevisiting',
  templateUrl: './homevisiting.page.html',
  styleUrls: ['./homevisiting.page.scss'],
})
export class HomevisitingPage implements OnInit {

  homevisiting: FormGroup;
  gender_id: any;
  form_name = "HomeVisit";

  constructor(public userservice: UserService, public platform: Platform, public toastCtrl: ToastController, public router: Router, public translateservice: TranslateService, public fb: FormBuilder) {
    this.gender_id = this.platform.getQueryParam("gender_id");
    console.log(this.gender_id);
  }

  ngOnInit() {
    this.homevisiting = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }


  SendData() {
    if (this.homevisiting.controls.name.value == "" || this.homevisiting.controls.address.value == "") {
      this.ErrorInData()
    }
    else {
      let userdata = {
        name: this.homevisiting.controls.name.value,
        address: this.homevisiting.controls.name.value,
        form_name: this.form_name,
        gender_id: this.gender_id
      }
      console.log(userdata);
      this.userservice.SendFormVariable(userdata).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("");
        this.DoneSendingData();
        this.homevisiting.reset();
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
