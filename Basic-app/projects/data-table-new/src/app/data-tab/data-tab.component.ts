import { Tabrow } from "./../domain";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from "@angular/core";
import { PipeCollector } from "@angular/compiler/src/template_parser/binding_parser";
//import { Tabrow } from '../domain';
//import {  } from 'events';

@Component({
  selector: "app-data-tab",
  templateUrl: "./data-tab.component.html",
  styleUrls: ["./data-tab.component.css"]
})
export class DataTabComponent implements OnInit {
  @Input()
  rows: Array<Tabrow> = new Array();

  @Output("delete")
  deleteRow: EventEmitter<Tabrow> = new EventEmitter();

  @ViewChild("textid", { static: false })
  textid: ElementRef;
  @ViewChild("textitem", { static: false })
  textitem: ElementRef;
  @ViewChild("textquantity", { static: false })
  textquantity: ElementRef;
  @ViewChild("textprice", { static: false })
  textprice: ElementRef;

  @Output()
  addrowobj = new EventEmitter<Tabrow>();

  constructor() {}
  ngOnInit() {}

  obj: Tabrow;

  // table = [this.textid, this.textitem, this.textquantity, this.textprice];

  addData() {
    this.obj = {
      id: this.textid.nativeElement.value,
      item: this.textitem.nativeElement.value,
      quantity: this.textquantity.nativeElement.value,
      price: this.textprice.nativeElement.value
    };
    this.addrowobj.emit(this.obj);
    console.log(this.obj);

    //  console.log(this.id,this.item,this.quantity,this.price)
  }
  onDeleteRow(row: Tabrow) {
    console.log(`Delete Clicked from data-table`, row);
    this.deleteRow.emit(row);
  }
}
