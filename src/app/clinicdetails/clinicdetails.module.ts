import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicdetailsPageRoutingModule } from './clinicdetails-routing.module';

import { ClinicdetailsPage } from './clinicdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicdetailsPageRoutingModule
  ],
  declarations: [ClinicdetailsPage]
})
export class ClinicdetailsPageModule {}
