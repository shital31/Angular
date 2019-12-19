import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  ispara=false
  onOkey() {
    this.ispara =! this.ispara
  }

  mobile = ['Android','Apple','Samsung','Mi']

  bsObj = ({ 'border': '1px solid red',
              'color':'red' })
  isAl = false
  removePara(){
    this.isAl =! this.isAl
  }
}
