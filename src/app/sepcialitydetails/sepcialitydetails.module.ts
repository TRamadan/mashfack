import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SepcialitydetailsPageRoutingModule } from './sepcialitydetails-routing.module';

import { SepcialitydetailsPage } from './sepcialitydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SepcialitydetailsPageRoutingModule
  ],
  declarations: [SepcialitydetailsPage]
})
export class SepcialitydetailsPageModule {}
