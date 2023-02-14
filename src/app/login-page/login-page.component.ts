import { Component } from '@angular/core';
import { LoginPage } from './login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
   log:LoginPage=new LoginPage();
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
