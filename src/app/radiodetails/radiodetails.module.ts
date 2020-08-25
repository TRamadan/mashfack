import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiodetailsPageRoutingModule } from './radiodetails-routing.module';

import { RadiodetailsPage } from './radiodetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiodetailsPageRoutingModule
  ],
  declarations: [RadiodetailsPage]
})
export class RadiodetailsPageModule {}
