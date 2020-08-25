import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotdetailsPage } from './forgotdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotdetailsPageRoutingModule {}
