import { Component } from '@angular/core';
import { EserviceService } from 'src/app/eservice.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { employee } from '../curd-applicaton/Employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private eserviceService:EserviceService,private router:Router) {
  }
  
  pattern="[0-9]"
  addEmployee= new FormGroup({
        id: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required)
      })

  upd(e:any,emp:any){
    this.eserviceService.UpdateEmployee(e,emp);
    this.router.navigate(['/listcomp'])
  }

}
