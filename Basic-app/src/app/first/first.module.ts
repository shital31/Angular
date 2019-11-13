import { FirstSampleComponent } from './../first-sample/first-sample.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FirstSampleComponent } from '../first-sample/first-sample.component';



@NgModule({
  declarations: [FirstSampleComponent],
  imports: [
    CommonModule
  ],
  exports : [FirstSampleComponent]
})
export class FirstModule { }
