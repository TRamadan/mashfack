import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicsunderhostdrsPageRoutingModule } from './clinicsunderhostdrs-routing.module';

import { ClinicsunderhostdrsPage } from './clinicsunderhostdrs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ClinicsunderhostdrsPageRoutingModule
  ],
  declarations: [ClinicsunderhostdrsPage]
})
export class ClinicsunderhostdrsPageModule { }
