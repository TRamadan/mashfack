import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalpagePageRoutingModule } from './finalpage-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { FinalpagePage } from './finalpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    FinalpagePageRoutingModule
  ],
  declarations: [FinalpagePage]
})
export class FinalpagePageModule { }
