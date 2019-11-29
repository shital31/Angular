import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // interpolation binding//
  title = 'data-binding';
  type = 'button';

  whatsDate() {
    return Date.now();
  }
  //property binding//
  brd = '1px solid red';
  bxBkCl = 'white';

  onMouseEnter(event: MouseEvent) { 
    console.log('Entered', event);
    this.bxBkCl = this.randomColor();
    this.bxBkCl1 = this.randomColor();
  }
  onMouseLeave(event: MouseEvent) {
    console.log('Exited', event);
    this.bxBkCl = 'white';
    this.bxBkCl1 = 'black';
  }

  onBtnClick(event: MouseEvent) {
    this.title = this.title.toUpperCase();
    console.log('Clicked', event);
  }

  randomColor(): string {
    let r: number = Math.floor(Math.random() * 255);
    let g: number = Math.floor(Math.random() * 255);
    let b: number = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }
}
