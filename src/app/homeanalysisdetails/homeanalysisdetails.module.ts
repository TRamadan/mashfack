import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from "@angular/forms";

import { HomeanalysisdetailsPageRoutingModule } from './homeanalysisdetails-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { HomeanalysisdetailsPage } from './homeanalysisdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    HomeanalysisdetailsPageRoutingModule
  ],
  declarations: [HomeanalysisdetailsPage]
})
export class HomeanalysisdetailsPageModule { }
