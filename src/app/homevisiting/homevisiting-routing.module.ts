import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomevisitingPage } from './homevisiting.page';

const routes: Routes = [
  {
    path: '',
    component: HomevisitingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomevisitingPageRoutingModule {}
