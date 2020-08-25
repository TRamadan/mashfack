import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { LocationPage } from './location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, TranslateModule.forChild(),
    LocationPageRoutingModule
  ],
  declarations: [LocationPage]
})
export class LocationPageModule { }
