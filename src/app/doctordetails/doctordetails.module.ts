import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctordetailsPageRoutingModule } from './doctordetails-routing.module';

import { DoctordetailsPage } from './doctordetails.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    DoctordetailsPageRoutingModule
  ],
  declarations: [DoctordetailsPage]
})
export class DoctordetailsPageModule { }
