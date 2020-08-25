import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeanalysisdetailsPage } from './homeanalysisdetails.page';

const routes: Routes = [
  {
    path: '',
    component: HomeanalysisdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeanalysisdetailsPageRoutingModule {}
