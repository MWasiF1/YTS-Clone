import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  showRegisterForm = false;
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  openRegisterForm() {
    this.showRegisterForm = true;
  }

  closeRegisterForm() {
    this.showRegisterForm = false;
  }

  register() {
    // Add register logic here
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    this.closeRegisterForm();
  }
}
