import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule, MdListModule } from '@angular/material';

import { WebMenuListComponent } from './web-menu-list.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdListModule
  ],
  exports: [
    WebMenuListComponent
  ],
  declarations: [WebMenuListComponent]
})
export class WebMenuListModule { }
