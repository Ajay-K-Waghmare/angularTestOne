import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(Element : ElementRef) {

    console.log(Element);
    Element.nativeElement.innerText = "gray";
   }


}
