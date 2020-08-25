import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacydetailsPageRoutingModule } from './pharmacydetails-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from "@angular/forms";

import { PharmacydetailsPage } from './pharmacydetails.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    PharmacydetailsPageRoutingModule
  ],
  declarations: [PharmacydetailsPage]
})
export class PharmacydetailsPageModule { }
