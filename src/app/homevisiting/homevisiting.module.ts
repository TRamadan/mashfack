import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomevisitingPageRoutingModule } from './homevisiting-routing.module';
import { ReactiveFormsModule } from "@angular/forms";

import { TranslateModule } from '@ngx-translate/core';

import { HomevisitingPage } from './homevisiting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    HomevisitingPageRoutingModule
  ],
  declarations: [HomevisitingPage]
})
export class HomevisitingPageModule { }
