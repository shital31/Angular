import { SampleService } from './sample.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataLoggerComponent } from './data-logger/data-logger.component';
import { DataMapperComponent } from './data-mapper/data-mapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DataLoggerComponent,
    DataMapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
