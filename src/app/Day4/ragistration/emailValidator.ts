import { AbstractControl } from '@angular/forms';

export function emailVal(control: AbstractControl) {
    let email=control.get('email')?.value
    let pattern=new RegExp('^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$')
  if (!pattern.test(email)) {
    return { invalidEmail: true };
  }
  return null;
}