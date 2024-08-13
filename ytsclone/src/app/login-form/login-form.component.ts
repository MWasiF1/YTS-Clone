import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  showLoginForm = false;
  username = '';
  password = '';

  openLoginForm() {
    this.showLoginForm = true;
  }

  closeLoginForm() {
    this.showLoginForm = false;
  }

  login() {
    
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
    
    this.closeLoginForm();
  }
}
