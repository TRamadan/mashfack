import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  constructor(public loadingController: LoadingController, public userservice: UserService, public toastCtrl: ToastController) { }

  ngOnInit() {
  }




}
