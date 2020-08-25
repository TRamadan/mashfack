import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabsdeprsdrdetailsPageRoutingModule } from './labsdeprsdrdetails-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { LabsdeprsdrdetailsPage } from './labsdeprsdrdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    LabsdeprsdrdetailsPageRoutingModule
  ],
  declarations: [LabsdeprsdrdetailsPage]
})
export class LabsdeprsdrdetailsPageModule { }
