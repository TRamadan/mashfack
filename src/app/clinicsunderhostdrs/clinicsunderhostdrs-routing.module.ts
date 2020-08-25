import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicsunderhostdrsPage } from './clinicsunderhostdrs.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicsunderhostdrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicsunderhostdrsPageRoutingModule {}
