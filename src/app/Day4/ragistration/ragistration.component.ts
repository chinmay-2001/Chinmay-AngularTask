import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, MaxLengthValidator } from '@angular/forms';
@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.css']
})
export class RagistrationComponent {

  firstname=''
  lastname=''
  email=''
  ragistration=new FormGroup(
    {
      firstname:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(15)])),
      lastname:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(15),Validators.pattern('^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$')])),
      email:new FormControl('',Validators.compose([Validators.required])) 
    },
    );
    match(){

    }
}

