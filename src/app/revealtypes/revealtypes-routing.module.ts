import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevealtypesPage } from './revealtypes.page';

const routes: Routes = [
  {
    path: '',
    component: RevealtypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevealtypesPageRoutingModule {}
