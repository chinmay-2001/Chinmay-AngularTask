import { Directive,Input,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appTask3directive]'
})
export class Task3directiveDirective {

  @Input() textColor:string="black";
  constructor(private Element:ElementRef) { 
    Element.nativeElement.style.color=this.textColor;
  }
  @HostListener('click',['$event']) MakeChange(){
    this.Element.nativeElement.style.color=this.textColor;
  }
}
