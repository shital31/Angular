import { Tabrows } from './../data-domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})
export class DataTabComponent implements OnInit {
  rows: Array<Tabrows> = new Array()

  constructor() {}

  ngOnInit() {
    this.rows.push({id : 1, item: 'pc' , quantity : 3, price : 10000});
    this.rows.push({ id: 1, item: 'pc', quantity: 3, price: 10000 });
    this.rows.push({ id: 1, item: 'pc', quantity: 3, price: 10000 });
    this.rows.push({ id: 1, item: 'pc', quantity: 3, price: 10000 });
  }
}
