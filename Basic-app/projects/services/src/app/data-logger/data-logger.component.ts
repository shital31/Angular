import { SampleComponent } from './../../../../../src/app/sample/sample.component';
import { SampleService } from './../sample.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-logger',
  templateUrl: './data-logger.component.html',
  styleUrls: ['./data-logger.component.css'],
  // providers: [SampleService],
})
export class DataLoggerComponent implements OnInit {

  logCnt = 0;
  constructor(
    private sample: SampleService
  ) { }

  ngOnInit() {
  }

  onLog(){

    this.logCnt = this.sample.cnt++;
  }

}
