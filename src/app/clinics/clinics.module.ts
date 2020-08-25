import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicsPageRoutingModule } from './clinics-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { ClinicsPage } from './clinics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    IonicModule,
    ClinicsPageRoutingModule
  ],
  declarations: [ClinicsPage]
})
export class ClinicsPageModule { }
