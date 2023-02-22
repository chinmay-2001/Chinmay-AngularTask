import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  conLogin(userName:string,password:string){
    if(userName==="admin" && password==="admin123"){
      this.router.navigate(['/contactus'])
      return true;
    }
    else {
      this.router.navigate(['/loginGuard'])
      return false;
    }
  }
  
}
