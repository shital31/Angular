 import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "data-binding-udemy";

  myClk(event: string) {
    console.log("hellonnn", event);
  }

  tw = "hi";
  val = 0;
  setVal(val: number) {
    this.val = val;
  }
}
