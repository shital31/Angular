import { FirstModule } from './first/first.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { GoogleComponent } from './google/google.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    GoogleComponent
  ],
  imports: [
    BrowserModule,FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
