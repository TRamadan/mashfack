import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalsPageRoutingModule } from './hospitals-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { HospitalsPage } from './hospitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    HospitalsPageRoutingModule
  ],
  declarations: [HospitalsPage]
})
export class HospitalsPageModule { }
