import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdIconModule, MdButtonModule, MdListModule, MdToolbarModule } from '@angular/material';

import { WebRootComponent } from './web.root.component';
import { WebMenuListModule } from './shared/web-menu-list/web-menu-list.module';

@NgModule({
  declarations: [
    WebRootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdToolbarModule,
    WebMenuListModule
  ],
  providers: [],
  bootstrap: [WebRootComponent]
})
export class WebRootModule { }
