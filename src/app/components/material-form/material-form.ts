import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-material-form',

  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],

  templateUrl: './material-form.html',
  styleUrl: './material-form.css',
})
export class MaterialForm {
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.minLength(8)]),

    department: new FormControl('', [Validators.required]),
  });

  submitForm() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();

      return;
    }

    console.log('FORM DATA:', this.registrationForm.value);
  }
}
