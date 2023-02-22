import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  canLoginToday():boolean{
    console.log("Hello")
    let today=new Date()
    console.log(today.getDay())
    if(today.getDay()==0 && today.getDay()==6){
      return false;
    }
    else {
      return true
    }
  }
}
