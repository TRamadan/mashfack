import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabsdepartmentsPageRoutingModule } from './labsdepartments-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { LabsdepartmentsPage } from './labsdepartments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    LabsdepartmentsPageRoutingModule
  ],
  declarations: [LabsdepartmentsPage]
})
export class LabsdepartmentsPageModule { }
