import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalsandclinicsPageRoutingModule } from './hospitalsandclinics-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { HospitalsandclinicsPage } from './hospitalsandclinics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    HospitalsandclinicsPageRoutingModule
  ],
  declarations: [HospitalsandclinicsPage]
})
export class HospitalsandclinicsPageModule { }
