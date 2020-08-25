import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomepagePageRoutingModule } from './welcomepage-routing.module';

import { WelcomepagePage } from './welcomepage.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomepagePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [WelcomepagePage]
})
export class WelcomepagePageModule { }
