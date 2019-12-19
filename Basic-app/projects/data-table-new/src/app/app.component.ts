import { Tabrow } from "./domain";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "data-table-new";
  data = new Array<Tabrow>();
  clickedRow: Tabrow;

  fetchData() {
    this.data.push({ id: 1, item: "pc", quantity: 1, price: 30000 });
    this.data.push({ id: 2, item: "pc", quantity: 1, price: 30000 });
    // this.data.push({ id: 3, item: "pc", quantity: 1, price: 30000 });
    // this.data.push({ id: 4, item: "pc", quantity: 1, price: 30000 });
    // this.data.push({ id: 5, item: "pc", quantity: 1, price: 30000 });
    // this.data.push({ id: 6, item: "pc", quantity: 1, price: 30000 });
    // this.data.push({ id: 7, item: "pc", quantity: 1, price: 30000 });
    // this.data.push({ id: 8, item: "pc", quantity: 1, price: 30000 });
  }

  deleteRow(row: Tabrow) {
    console.log(`Delete clicked`, row);

    this.clickedRow = row;
    console.log(this.clickedRow, "..................................");

    this.data.forEach((dt, index) => {
      if (dt.id === row.id) {
        this.data.splice(index, 1);
      }
    });
  }

  addArray(add: Tabrow) {
    this.data.push(add);
  }
}
