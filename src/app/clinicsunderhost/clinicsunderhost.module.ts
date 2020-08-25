import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicsunderhostPageRoutingModule } from './clinicsunderhost-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { ClinicsunderhostPage } from './clinicsunderhost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ClinicsunderhostPageRoutingModule
  ],
  declarations: [ClinicsunderhostPage]
})
export class ClinicsunderhostPageModule { }
