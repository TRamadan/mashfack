import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XraysPageRoutingModule } from './xrays-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

import { TranslateModule } from '@ngx-translate/core';
import { XraysPage } from './xrays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    IonicModule,
    XraysPageRoutingModule
  ],
  declarations: [XraysPage]
})
export class XraysPageModule { }
