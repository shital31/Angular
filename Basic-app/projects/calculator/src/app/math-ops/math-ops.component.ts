import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-math-ops',
  templateUrl: './math-ops.component.html',
  styleUrls: ['./math-ops.component.css']
})
export class MathOpsComponent implements OnInit {
 
@ContentChild ('alt', {static: true})
alt:ElementRef  //to acces third party content ot child content from parent

  constructor() { }

  ngOnInit() {
  console.log(this.alt)
  }

}
