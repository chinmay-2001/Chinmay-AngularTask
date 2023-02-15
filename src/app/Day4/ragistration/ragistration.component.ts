import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, MaxLengthValidator,FormBuilder } from '@angular/forms';
import { emailVal } from './emailValidator'; 
@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.css']
})
export class RagistrationComponent {

  constructor(private formbuilder:FormBuilder){}
  firstname=''
  lastname=''
  email=''
  password=''
  conformpassword=''
  ragistration=this.formbuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.required,Validators.email],
    password:['',Validators.required,],
    conformpassword:['',Validators.required,],
  },{
    validator:emailVal
  })
  // ragistration=new FormGroup(
  //   {
  //     firstname:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(15)])),
  //     lastname:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(15)])),
  //     email:new FormControl('',Validators.compose([Validators.required])) 
  //   },
  //   );
  
    validateEmail(c:FormGroup){
      let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      return EMAIL_REGEXP.test(c.value) ? null: {
        emailError: {
          message:"Email is invalid"
        }
      }
    }
}

