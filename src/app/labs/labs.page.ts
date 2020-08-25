import { Component, OnInit } from '@angular/core';
import { LabCenters } from '../../services/labscenters/labscenters.service';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.page.html',
  styleUrls: ['./labs.page.scss'],
})
export class LabsPage implements OnInit {

  Labs = [];
  constructor(public router: Router, public translateservice: TranslateService, public loadingController: LoadingController) { }

  ngOnInit() {
  }



  SendData() {

  }



}
