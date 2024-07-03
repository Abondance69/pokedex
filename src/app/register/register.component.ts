import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink, Router  } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  pseudo = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  registerCustomer() {
    const emailValue = this.email.value ?? '';
    const pseudoValue = this.pseudo.value ?? '';
    const passwordValue = this.password.value ?? '';

    localStorage.setItem('Email', emailValue);
    localStorage.setItem('Pseudo', pseudoValue);
    localStorage.setItem('Password', passwordValue);

    // Je part vers la page de login
    this.router.navigate(['/login']);
  }

  onSubmit() {
    // console.log(this.profileForm.value,
    //   this.profileForm.value.firstName,
    //   this.profileForm.value.lastName);
  }
}