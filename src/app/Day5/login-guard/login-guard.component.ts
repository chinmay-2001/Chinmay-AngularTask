import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-guard',
  templateUrl: './login-guard.component.html',
  styleUrls: ['./login-guard.component.css']
})
export class LoginGuardComponent {
  constructor(private loginservice:LoginService){}
  userid:string=""
  password:string=""
  sub(){
    this.loginservice.conLogin(this.userid,this.password)
  }
}
