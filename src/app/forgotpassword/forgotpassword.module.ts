import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPageRoutingModule } from './forgotpassword-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

import { ForgotpasswordPage } from './forgotpassword.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ForgotpasswordPageRoutingModule
  ],
  declarations: [ForgotpasswordPage]
})
export class ForgotpasswordPageModule { }
