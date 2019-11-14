import { FirstSampleComponent } from "./../first-sample/first-sample.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyCardComponent } from "./my-card/my-card.component";
//import { FirstSampleComponent } from '../first-sample/first-sample.component';

@NgModule({
  declarations: [FirstSampleComponent, MyCardComponent],
  imports: [CommonModule],
  exports: [FirstSampleComponent, MyCardComponent]
})
export class FirstModule {}
