import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SepcialitydetailsPage } from './sepcialitydetails.page';

const routes: Routes = [
  {
    path: '',
    component: SepcialitydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SepcialitydetailsPageRoutingModule {}
