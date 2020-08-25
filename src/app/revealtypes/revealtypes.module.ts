import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevealtypesPageRoutingModule } from './revealtypes-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { RevealtypesPage } from './revealtypes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RevealtypesPageRoutingModule
  ],
  declarations: [RevealtypesPage]
})
export class RevealtypesPageModule {}
