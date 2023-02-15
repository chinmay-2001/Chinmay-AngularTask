import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
    username:string='';
    password:string='';
	  loginSuccess = false;
    loginFailed = false;
    login() {
        this.loginFailed = this.loginSuccess = false;
        if (this.username == "admin" && this.password == "admin@123") {
          this.loginSuccess = true
        } else {
          this.loginFailed = true;
        }
    }
      

}
