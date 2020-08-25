import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosecityPage } from './choosecity.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosecityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosecityPageRoutingModule {}
