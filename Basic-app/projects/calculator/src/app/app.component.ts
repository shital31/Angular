import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';

@ViewChild ('Calc', {static: false})
  Calc:ElementRef

  @ViewChild('Calc', { static: false })
  result:ElementRef

 @ViewChild('alt',{static:false})
  alt:ElementRef

  calculate(Calci: string){
    console.log(this.Calc.nativeElement.value)
    this.result.nativeElement.value = eval(this.Calc.nativeElement.value)
  }
 cls(){
   this.Calc.nativeElement.value = ''
   this.result.nativeElement.value=''
   console.log(this.alt)
 }


}
