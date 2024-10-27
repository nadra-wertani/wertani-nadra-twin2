import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private el:ElementRef) { } //element ref detecter ay element fel page 
  @HostListener('mouseenter')M(){
    this.el.nativeElement.style.backgroundColor="red"
  }
@HostListener('mouseleave')t(){
  this.el.nativeElement.style.backgroundColor="yellow"
}
}