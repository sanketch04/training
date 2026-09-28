import { AbstractControl, ValidationErrors } from '@angular/forms';

export function strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value;

  if (!password) {
    return null;
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
  const hasMinimumLength = password.length >= 8;

  if (hasUppercase && hasNumber && hasSpecialCharacter && hasMinimumLength) {
    return null;
  }

  return {
    strongPassword: true,
  };
}
