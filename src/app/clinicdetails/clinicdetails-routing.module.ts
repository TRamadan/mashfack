import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicdetailsPage } from './clinicdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicdetailsPageRoutingModule {}
