import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  password:string="";
  conformPassword:string=""
  passwordStrength=""
  con:string=''

  passwordCheck(){
    let reS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let reG = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(reS.test(this.password)) {
      this.passwordStrength = "strong";
    }else if(reG.test(this.password)) {
      this.passwordStrength = "good";
    }else {
      this.passwordStrength = "weak";
    }
  }

  

}
