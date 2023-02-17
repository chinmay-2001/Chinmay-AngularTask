import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

import { EserviceService } from 'src/app/eservice.service';
import { employee } from './Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curd-applicaton',
  templateUrl: './curd-applicaton.component.html',
  styleUrls: ['./curd-applicaton.component.css']
})
export class CurdApplicatonComponent {


  constructor(private eserviceService:EserviceService,private router:Router) {
  }
  
  pattern="[0-9]"
  addEmployee= new FormGroup({
        id: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required)
      })

add(emp:any){
  this.eserviceService.AddEmployee(emp)  ;
  this.router.navigate(['listcomp'])

}
  
}
