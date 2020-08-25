import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from "@angular/forms";

import { ChangepasswordPageRoutingModule } from './changepassword-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { ChangepasswordPage } from './changepassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    IonicModule,
    ChangepasswordPageRoutingModule
  ],
  declarations: [ChangepasswordPage]
})
export class ChangepasswordPageModule { }
