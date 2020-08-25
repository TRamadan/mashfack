import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadiodetailsPage } from './radiodetails.page';

const routes: Routes = [
  {
    path: '',
    component: RadiodetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadiodetailsPageRoutingModule {}
