import { AbstractControl } from "@angular/forms";

export class customValidators {
 static spaceNotAllowed(control: AbstractControl): { [key: string]: boolean } | null {
        if ((control.value as String).indexOf(' ')>=0)
          return {spaceNotAllowed : true};
        
      return null;
      }
}