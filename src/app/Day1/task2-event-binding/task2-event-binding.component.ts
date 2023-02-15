import { Component } from '@angular/core';
import { Login } from './Login';
@Component({
  selector: 'app-task2-event-binding',
  templateUrl: './task2-event-binding.component.html',
  styleUrls: ['./task2-event-binding.component.css']
})
export class Task2EventBindingComponent {
  
  log:Login=new Login();
   result:string="failure";
   element=<HTMLInputElement>document.getElementById('submit');

   validate(){
    if(this.log.id=="innovapptive" && this.log.pwd=="innovapptive"){
      this.result="success"
    }
    else{
      this.result="failure"
    }
   }

   reResult(){
    return this.result;
   }
   clear(){
    this.log.id="";
    this.log.pwd="";
   }
}
