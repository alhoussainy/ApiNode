import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDateComponent } from './show-date.component';

const routes: Routes = [
  {
    path: '',
    component: ShowDateComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
