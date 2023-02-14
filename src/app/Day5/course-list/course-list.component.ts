import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() cName:string = '';

  courses=[
    {courseId :1,courseName : 'NodeJS'},
    {courseId :2,courseName : 'Typescript'},
    {courseId :3,courseName : 'Angular'},
    {courseId :4,courseName : 'ReactJS'}
  ]

}
