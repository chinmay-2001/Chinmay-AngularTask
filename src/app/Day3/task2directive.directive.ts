import { Directive,Input, ElementRef,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appTask2directive]'
})
export class Task2directiveDirective {
  
  @Input() PasswordForCheck:string="";
  passwordStrength:string="";
  constructor(private Element:ElementRef) { 
    
  }
  
  @HostListener('onchange') passcheck(){
      let reS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      let reG = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if(reS.test(this.PasswordForCheck)) {
        this.passwordStrength = "strong";
      }else if(reG.test(this.PasswordForCheck)) {
        this.passwordStrength = "good";
      }else {
        this.passwordStrength = "weak";
      }

      if(this.passwordStrength=='strong'){
        this.Element.nativeElement.style.backgroundColor='green';
        this.Element.nativeElement.style.color='white';
        this.Element.nativeElement.innerText="Strong Password"
      }

      if(this.passwordStrength=='good'){
        this.Element.nativeElement.style.backgroundColor='pink';
        this.Element.nativeElement.style.color='white';
        this.Element.nativeElement.innerText="Good Password"

      }
      if(this.passwordStrength=='weak'){
        this.Element.nativeElement.style.backgroundColor='red';
        this.Element.nativeElement.style.color='white';
        this.Element.nativeElement.innerText="Weak Password"
      }
  }
}
