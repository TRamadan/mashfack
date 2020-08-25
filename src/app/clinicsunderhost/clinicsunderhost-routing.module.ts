import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicsunderhostPage } from './clinicsunderhost.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicsunderhostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicsunderhostPageRoutingModule {}
