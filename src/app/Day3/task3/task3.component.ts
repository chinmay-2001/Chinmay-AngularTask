import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  Color:string='black'
  constructor(){
    
  }
  radioChange(event: any){
    this.Color=event.target.value;
  }

}
