import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-switch',
  templateUrl: './directive-switch.component.html',
  styleUrls: ['./directive-switch.component.css']
})
export class DirectiveSwitchComponent {

  MyChoice:number=1;
  nextChoice(){
    this.MyChoice++;
  }

}
