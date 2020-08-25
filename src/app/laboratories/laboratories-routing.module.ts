import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoriesPage } from './laboratories.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoriesPageRoutingModule {}
