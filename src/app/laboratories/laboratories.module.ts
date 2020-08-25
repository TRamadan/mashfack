import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { LaboratoriesPageRoutingModule } from './laboratories-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { LaboratoriesPage } from './laboratories.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    LaboratoriesPageRoutingModule
  ],
  declarations: [LaboratoriesPage]
})
export class LaboratoriesPageModule { }
