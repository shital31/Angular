import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleNavComponent } from './google-nav/google-nav.component';
import { GoogleLogoComponent } from './google-logo/google-logo.component';
import { GoogleFooterComponent } from './google-footer/google-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleNavComponent,
    GoogleLogoComponent,
    GoogleFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
