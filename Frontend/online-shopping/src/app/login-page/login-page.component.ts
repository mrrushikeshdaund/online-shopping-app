import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  hide = signal(true);
  isVisible = true;
  email = '';
  username = '';
  password = '';

  private destory$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {}

  handleVisiblity() {
    this.isVisible ? (this.isVisible = false) : (this.isVisible = true);
    this.handleClearAction();
  }

  handleLoginAction() {
    console.log(this.username);
    console.log(this.password);
    const userObj = {
      username: this.username,
      password: this.password,
    };
    this.authService
      .loginUser(userObj)
      .pipe(takeUntil(this.destory$))
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['dashboard']);
  }

  handleClearAction() {
    this.email = '';
    this.password = '';
    this.username = '';
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  handleRegisterAction() {
    console.log(this.email);
    console.log(this.username);
    console.log(this.password);
    const newUserObj = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
    this.authService
      .registerUser(newUserObj)
      .pipe(takeUntil(this.destory$))
      .subscribe((response) => {
        console.log(response);
      });
  }
}
