import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateserviceService {

  constructor() { }

  getTodaysDate() :any{
    return new Date();
  }
}
