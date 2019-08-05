import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'appStd'
})
export class StdDirective {

  constructor(private er:ElementRef) {
    this.er.nativeElement.style.color="green";
   }

}
