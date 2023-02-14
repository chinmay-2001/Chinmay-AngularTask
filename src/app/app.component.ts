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
  constructor(private dateService:DateserviceService){ }
  Today=this.dateService.getTodaysDate()
}


