import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user/user.service";
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications = [];
  unreadnotifications: number;
  constructor(public translateservice: TranslateService, public loadingcontroller: LoadingController, public router: Router, public userservice: UserService) {
    this.unreadnotifications = 0;
  }

  ngOnInit() {
    this.GetAllnotifications();
  }

  GetAllnotifications() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingcontroller.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.userservice.notifications().subscribe(data => {
      this.notifications = data;
      this.unreadnotifications++;
      this.loadingcontroller.dismiss();
      console.log(data)
    })
  }



}
