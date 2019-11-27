import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // interpolation binding//
  title = "data-binding";
  type = "button";

  
  whatsDate() {
    return Date.now();
  }
  //property binding//
  brd = "1px solid red";
  bxBkCl = 'white'

  onMouseEnter(event: MouseEvent){
    console.log("Entered",event);
    this.bxBkCl='red'
  }
  onMouseLeave(event:MouseEvent){
     console.log("Exited",event);
     this.bxBkCl='white'
  }
}
