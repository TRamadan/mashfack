import { Component, OnInit } from '@angular/core';
import { LabCenters } from '../../services/labscenters/labscenters.service';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-labsdepartments',
  templateUrl: './labsdepartments.page.html',
  styleUrls: ['./labsdepartments.page.scss'],
})
export class LabsdepartmentsPage implements OnInit {

  LabsDepartments = [];

  constructor(public labcenters: LabCenters, public translateservice: TranslateService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.GetAlllabsDeps();
  }

  GetAlllabsDeps() {
    let message = this.translateservice.instant('Please wait ...')
    this.loadingController.create({ spinner: 'bubbles', message: message }).then((loadingElement) => {
      loadingElement.present();
    });
    this.labcenters.labsDepartments().subscribe(data => {
      this.LabsDepartments = data.departments;
      this.loadingController.dismiss();
      console.log(data);
    })

  }





}
