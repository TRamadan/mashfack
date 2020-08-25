import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotdetailsPageRoutingModule } from './forgotdetails-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

import { ForgotdetailsPage } from './forgotdetails.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ForgotdetailsPageRoutingModule
  ],
  declarations: [ForgotdetailsPage]
})
export class ForgotdetailsPageModule { }
