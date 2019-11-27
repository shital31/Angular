import { FirstModule } from './first/first.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { GoogleComponent } from './google/google.component';
import { FirstSampleNewComponent } from './first-sample-new/first-sample-new.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    GoogleComponent,
    FirstSampleNewComponent
  ],
  imports: [
    BrowserModule,FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
