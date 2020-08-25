import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalsandclinicsPage } from './hospitalsandclinics.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalsandclinicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalsandclinicsPageRoutingModule {}
