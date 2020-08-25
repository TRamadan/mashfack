import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from "../../services/user/user.service";
import { DoctorService } from "../../services/doctor/doctor.service";
import { TranslateService } from '@ngx-translate/core';
import { LabCenters } from "../../services/labscenters/labscenters.service";
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // name: string = "tarek"

  isLoggined: any;

  constructor(public labscenters: LabCenters, public translateservice: TranslateService, public doctorservice: DoctorService, public userservice: UserService, public router: Router, public alertController: AlertController) {
  }
  ngOnInit() {
    this.doctorservice.H = 0;
    this.doctorservice.C = 0;
    this.doctorservice.D = 0;
  }

  ionViewWillEnter() {
    // to get saved login data
    if (window.localStorage.getItem('userPatientInfo') != null) {
      let data = JSON.parse(window.localStorage.getItem('userPatientInfo'));
      this.isLoggined = window.localStorage.getItem('userPatientInfo')
      console.table(data);

      this.setProfileData(data);
    }
  }

  // ionSelected() {
  //   this.GenderSelect();
  // }

  gotospeciality() {
    this.doctorservice.category = 1;
    console.log(this.doctorservice.category);
    this.router.navigateByUrl("specialty");
  }

  gotolabs(gender_id: any) {
    this.router.navigateByUrl("laboratories?gender_id=" + gender_id);
  }

  gotocenters() {
    this.doctorservice.D = 1;
    this.doctorservice.category = 2;
    this.labscenters.centerType = 1;
    this.doctorservice.currentReveal = 1;
    this.router.navigateByUrl("location")
  }


  async GenderSelect() {
    let header = this.translateservice.instant('Choose your gender for nursing');
    let male = this.translateservice.instant('Male');
    let female = this.translateservice.instant('Female');
    let cancelbutton = this.translateservice.instant('cancel');
    let ok = this.translateservice.instant('Ok');

    console.log("this function is worked well")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      mode: 'ios',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: male,
          value: '1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: female,
          value: '2'
        }
      ],
      buttons: [
        {
          text: cancelbutton,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: ok,
          handler: (data) => {
            this.gotonursing(data);
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  async GenderSelect2() {
    let header = this.translateservice.instant('Choose your gender for Home lab analysis');
    let male = this.translateservice.instant('Male');
    let female = this.translateservice.instant('Female');
    let cancelbutton = this.translateservice.instant('cancel');
    let ok = this.translateservice.instant('Ok');

    console.log("this function is worked well")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      animated: true,
      mode: 'ios',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: male,
          value: '1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: female,
          value: '2'
        }
      ],
      buttons: [
        {
          text: cancelbutton,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: ok,
          handler: (data) => {
            this.gotohomeanalysis(data);
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  async GenderSelect3() {

    let header = this.translateservice.instant('Choose your gender for Home visiting');
    let male = this.translateservice.instant('Male');
    let female = this.translateservice.instant('Female');
    let cancelbutton = this.translateservice.instant('cancel');
    let ok = this.translateservice.instant('Ok');

    console.log("this function is worked well")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      mode: 'ios',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: male,
          value: '1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: female,
          value: '2'
        }
      ],
      buttons: [
        {
          text: cancelbutton,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: ok,
          handler: (data) => {
            console.log(data);
            this.gotohomevisiting(data);
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  gotonursing(gender_id: any) {
    this.router.navigateByUrl("nursingdetails?gender_id=" + gender_id);
  }

  gotohomevisiting(gender_id: any) {
    this.router.navigateByUrl("homevisiting?gender_id=" + gender_id)
  }

  gotohospitalsandclinics() {
    this.doctorservice.category = 1;
    this.doctorservice.bookType = 1;
    console.log(this.doctorservice.category);
    console.log(this.doctorservice.bookType)
    this.router.navigateByUrl("hospitalsandclinics")
  }

  gotohomeanalysis(gender_id) {
    this.router.navigateByUrl("homeanalysisdetails?gender_id=" + gender_id);
  }


  setProfileData(x: any) {
    this.userservice.name = x.name;
    this.userservice.phone = x.phone;
    this.userservice.gender = x.gender;
    this.userservice.email = x.email;
    this.userservice.token = x.token;
    this.userservice.avatar = x.avatar;
    this.userservice.age = x.age;
    this.userservice.weight = x.weight;
    this.userservice.diseases = x.diseases;
    this.userservice.id = x.id
  }
  gotoxraycenters(gender_id: any) {
    this.router.navigateByUrl("xrays?gender_id=" + gender_id)
  }

  async GenderSelect4() {
    let header = this.translateservice.instant('Choose your gender for x-ray centers');
    let male = this.translateservice.instant('Male');
    let female = this.translateservice.instant('Female');
    let cancelbutton = this.translateservice.instant('cancel');
    let ok = this.translateservice.instant('Ok');

    console.log("this function is worked well")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      mode: 'ios',
      animated: true,
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: male,
          value: '1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: female,
          value: '2',
        }
      ],
      buttons: [
        {
          text: cancelbutton,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: ok,
          handler: (data) => {
            console.log(data);
            this.gotoxraycenters(data);
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  async GenderSelect5() {
    let header = this.translateservice.instant('Choose your gender for x-ray centers');
    let male = this.translateservice.instant('Male');
    let female = this.translateservice.instant('Female');
    let cancelbutton = this.translateservice.instant('cancel');
    let ok = this.translateservice.instant('Ok');

    console.log("this function is worked well")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      mode: 'ios',
      animated: true,
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: male,
          value: '1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: female,
          value: '2',
        }
      ],
      buttons: [
        {
          text: cancelbutton,
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: ok,
          handler: (data) => {
            console.log(data);
            this.gotolabs(data);
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }


}
