import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-sharing-student-child-to-parent',
  templateUrl: './data-sharing-student-child-to-parent.component.html',
  styleUrls: ['./data-sharing-student-child-to-parent.component.css']
})
export class DataSharingStudentChildToParentComponent {
    @Output() myOutput :  EventEmitter<String> =new EventEmitter();
    OutputMessage: string="I am form child component";
    sendValues(){
      this.myOutput.emit(this.OutputMessage);
    }
}
