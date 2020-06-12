import { AbstractControl } from '@angular/forms';

export function userName(control: AbstractControl){
  console.log('Name : ' + control.value);
}




