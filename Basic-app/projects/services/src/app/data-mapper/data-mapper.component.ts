import { SampleService } from './../sample.service';
import { SampleComponent } from './../../../../../src/app/sample/sample.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-mapper',
  templateUrl: './data-mapper.component.html',
  styleUrls: ['./data-mapper.component.css'],
  //  providers: [SampleService]
})
export class DataMapperComponent implements OnInit {
  mapCnt = 0
  constructor(
    private sample:SampleService
  ) {
   }

  ngOnInit() {
  }
  onMap(){
    this.mapCnt = this.sample.cnt++
  }
  

}
