import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-practice';
  type = 'text';
  type1 = 'button';

  watsDate(){
    return Date.now()
  }

  border= '1px solid red'

  bxbkcl = 'white'

  onMouseEnter(event:MouseEvent){
    console.log('Entered',event)
    this.bxbkcl= this.randomColor()
  }
  onMouseLeave(event : MouseEvent){
    console.log('Exited',event)
    this.bxbkcl = 'white'
  }
  // randomColor(): string {
  //   let r: number = Math.floor(Math.random() * 200)
  //   let g: number = Math.floor(Math.random() * 150)
  //   let b: number = Math.floor(Math.random() * 255)
  //   return(`rgb ${r},${g},${b}`)
  //}
  randomColor(): string {
    let r: number = Math.floor(Math.random() * 255);
    let g: number = Math.floor(Math.random() * 255);
    let b: number = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }


}
