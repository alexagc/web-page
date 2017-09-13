import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebRootComponent } from './web.root.component';

@NgModule({
  declarations: [
    WebRootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WebRootComponent]
})
export class WebRootModule { }
