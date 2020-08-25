import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosecityPageRoutingModule } from './choosecity-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { ChoosecityPage } from './choosecity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ChoosecityPageRoutingModule
  ],
  declarations: [ChoosecityPage]
})
export class ChoosecityPageModule { }
