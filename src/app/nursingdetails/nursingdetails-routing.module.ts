import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NursingdetailsPage } from './nursingdetails.page';

const routes: Routes = [
  {
    path: '',
    component: NursingdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NursingdetailsPageRoutingModule {}
