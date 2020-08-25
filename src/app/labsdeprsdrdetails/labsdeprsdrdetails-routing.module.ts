import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabsdeprsdrdetailsPage } from './labsdeprsdrdetails.page';

const routes: Routes = [
  {
    path: '',
    component: LabsdeprsdrdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabsdeprsdrdetailsPageRoutingModule {}
