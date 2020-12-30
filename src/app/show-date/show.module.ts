import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowDateComponent } from './show-date.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShowDateComponent,
    ShowRoutingModule
  ],
  exports: [
    ShowDateComponent
  ]
})
export class ShowModule { }
