import { Component } from '@angular/core';
import { DateserviceService } from './dateservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<b>{{title}}</b>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My first app Innovapptive';
  color:string='red';
  data:any;
  constructor(private dateService:DateserviceService){ }
  MyInputMessage:string="I am parent component";
  Today=this.dateService.getTodaysDate()

  getchildData(data:any){
    console.log(data)
    this.data = data;
  }

  name:string=''
  courseName=''
  clicked=false

  getChild(courseName:string){
    this.courseName = courseName
    this.clicked=true;
  }
}


