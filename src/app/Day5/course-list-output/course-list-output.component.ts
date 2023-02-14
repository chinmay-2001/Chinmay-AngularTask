import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list-output',
  templateUrl: './course-list-output.component.html',
  styleUrls: ['./course-list-output.component.css']
})
export class CourseListOutputComponent {

  @Output() onRagister=new EventEmitter(); 
  courses=[
    {courseId :1,courseName : 'NodeJS'},
    {courseId :2,courseName : 'Typescript'},
    {courseId :3,courseName : 'Angular'},
    {courseId :4,courseName : 'ReactJS'}
  ]

  ragister(courseName: any){
    this.onRagister.emit(courseName);
  }
}
