import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService {

  constructor(private sev:UserService,private router:Router) { }

  canActivate(){
    let data=this.sev.canLoginToday()
    console.log("here",this.sev.canLoginToday())
    if(this.sev.canLoginToday()){
      this.router.navigate(['home'])
      return true;
    }
    else{
      return false
    }
  }
}
