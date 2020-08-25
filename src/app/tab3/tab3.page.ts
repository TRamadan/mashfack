import { Component, OnInit } from '@angular/core';
import { DoctorService } from "../../services/doctor/doctor.service";
import { LoadingController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  AllDates = [];
  // id: any;
  index: any;
  constructor(public alertCtrl: AlertController, public translateservice: TranslateService, public loadingController: LoadingController, public doctorservice: DoctorService) {
    console.log("here is from the dates tab")
    // this.id = this.doctorservice.id;
  }

  ionViewDidEnter() {
    this.GetAllDates();
  }

  GetAllDates() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.displayDates().subscribe(data => {
      this.AllDates = data;
      this.loadingController.dismiss();
      console.log(this.AllDates);
      console.log(data);
    })
  }

  DeleteDate(x: any, y: any) {
    this.doctorservice.cancelDate(x, y).subscribe(data => {
      console.log(data);
      this.AllDates.splice(this.index, 1);
      this.DoneDeletingDate();
    }, error => {
      console.log(error);
    })
    console.log("this functuon is fired")
  }


  async Response(x) {
    let title = this.translateservice.instant('Cancel Date');
    let message = this.translateservice.instant('Enter Your Complain ?');
    let Cancel = this.translateservice.instant('Cancel');
    let send = this.translateservice.instant('Send And Delete');
    console.log("this function is worked well")
    const alert = await this.alertCtrl.create({
      header: title,
      inputs: [
        {
          name: 'title',
          placeholder: message
        },
      ],
      buttons: [
        {
          text: Cancel,
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: send,
          handler: data => {
            this.DeleteDate(x, data.title);
          }
        }
      ]
    });
    await alert.present();
  }

  async DoneDeletingDate() {
    let header = this.translateservice.instant('Done');
    let message = this.translateservice.instant('Successfull Deleting')
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
