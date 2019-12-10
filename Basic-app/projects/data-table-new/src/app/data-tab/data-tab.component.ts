import { Tabrow } from './../domain';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
//import { Tabrow } from '../domain';
//import {  } from 'events';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})
export class DataTabComponent implements OnInit {

  @Input()
  rows : Array<Tabrow> = new Array()
 
  @Output('delete')
  deleteRow: EventEmitter<Tabrow> = new EventEmitter()
 
  onDeleteRow(row: Tabrow){
    console.log(`Delete Clicked from data-table`, row)
    this.deleteRow.emit(row)
  }
  constructor() { }
  ngOnInit() {}
}
