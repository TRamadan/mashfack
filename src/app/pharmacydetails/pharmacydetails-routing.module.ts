import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacydetailsPage } from './pharmacydetails.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacydetailsPageRoutingModule {}
