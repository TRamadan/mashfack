import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { UserService } from "../../services/user/user.service";
import { DoctorService } from "../../services/doctor/doctor.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  AllFav = [];
  fav_id: any;
  constructor(public translateservice: TranslateService, public doctorservice: DoctorService, public loadingController: LoadingController, public userservice: UserService, public toastctrl: ToastController) {
    // this.GetAllFavs();

  }


  ionViewDidEnter() {
    this.GetAllFavs();
  }

  GetAllFavs() {
    let message = this.translateservice.instant('Please wait ...');
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.displayFav().subscribe(data => {
      this.loadingController.dismiss();
      this.AllFav = data;
      console.log(data);
      console.log(this.AllFav)
    }, error => {
      console.log(error);
    })
  }

  deleteitem(fav_id: any, i: any) {
    this.fav_id = fav_id;
    let message = this.translateservice.instant('Please wait ...');
    this.loadingController.create({ spinner: 'bubbles', message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.doctorservice.deleteFav(fav_id).subscribe(data => {
      this.AllFav.splice(i, 1);
      console.log(data);
      this.loadingController.dismiss();
      this.DoneDelete();
    }, error => {
      console.log(error);
    })
  }

  async DoneDelete() {
    let message = this.translateservice.instant('This item has been deleted successfully')
    const toast = await this.toastctrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

}
