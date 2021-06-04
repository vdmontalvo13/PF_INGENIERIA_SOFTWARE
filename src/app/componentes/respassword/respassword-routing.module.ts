import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespasswordPage } from './respassword.page';

const routes: Routes = [
  {
    path: '',
    component: RespasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespasswordPageRoutingModule {}
