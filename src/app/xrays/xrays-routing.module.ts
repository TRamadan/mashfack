import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XraysPage } from './xrays.page';

const routes: Routes = [
  {
    path: '',
    component: XraysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XraysPageRoutingModule {}
