import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WebRootComponent } from './web.root.component';
import { APP_ROUTES } from './routes';

@NgModule({
  declarations: [
    WebRootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [WebRootComponent]
})
export class WebRootModule { }
