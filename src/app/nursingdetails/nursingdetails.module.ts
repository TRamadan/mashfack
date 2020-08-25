import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NursingdetailsPageRoutingModule } from './nursingdetails-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from "@angular/forms";

import { NursingdetailsPage } from './nursingdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    NursingdetailsPageRoutingModule
  ],
  declarations: [NursingdetailsPage]
})
export class NursingdetailsPageModule { }
