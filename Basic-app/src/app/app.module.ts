import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { GoogleComponent } from './google/google.component';
import { CustomComponentsComponent } from './custom-components/custom-components.component';
import { MathOpsComponent } from './math-ops/math-ops.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    GoogleComponent,
    CustomComponentsComponent,
    MathOpsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
