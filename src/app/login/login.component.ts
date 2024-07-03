import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  pseudo = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  loginCustomer() {
    const pseudoValue = this.pseudo.value ?? '';
    const passwordValue = this.password.value ?? '';

    const pseudoItem = localStorage.getItem('Pseudo');
    const passwordItem = localStorage.getItem('Password');

    console.log(pseudoItem);
    console.log(passwordItem);
    if(pseudoItem == pseudoValue && passwordItem == passwordValue){
      this.router.navigate(['/']);
    }else {
      console.log("Le mots de passe ou pseudo invalide");
    }
  }

  onSubmit() {
  }
}