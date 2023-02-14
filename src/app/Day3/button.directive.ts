import { Directive,ElementRef,HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

    @Input() buttoncolor:string="red";
  constructor(private Element:ElementRef) {
    Element.nativeElement.style.backgroundColor=this.buttoncolor
    Element.nativeElement.style.color='white'
    Element.nativeElement.style.fontFamily='cursive'
    Element.nativeElement.style.width='100px'
    Element.nativeElement.style.height='30px'
   }
   @HostListener('mouseenter') onMouseEnter(){
    this.Element.nativeElement.style.backgroundColor=this.buttoncolor
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.Element.nativeElement.style.backgroundColor='black'
  }

}
