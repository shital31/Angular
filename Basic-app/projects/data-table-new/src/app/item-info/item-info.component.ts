import { Component, OnInit, Input } from "@angular/core";
import { Tabrow } from "../domain";

@Component({
  selector: "app-item-info",
  templateUrl: "./item-info.component.html",
  styleUrls: ["./item-info.component.css"]
})
export class ItemInfoComponent implements OnInit {
  @Input()
  show:Tabrow;

  constructor() {}

  ngOnInit() {}
}
