import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'calculator';
// it refers to the htm;l element like document.get.elementbiId
  @ViewChild ('calcStr',{static : false}) //static always false it shows change detection cycle, viewchild is the decorator
  calcStr: ElementRef

  @ViewChild('result', { static: false })
  result: ElementRef

  @ViewChild('alt',{static:false})
  alt:ElementRef

  // function to calculate operation
  calculate(){
    console.log(this.calcStr.nativeElement.value)
    this.result.nativeElement.value = eval(this.calcStr.nativeElement.value)
  }
//to clear screen
  clear(){
    this.calcStr.nativeElement.value = ''
    this.result.nativeElement.value = ''

  }


}
