import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {
  MatDialogRef,
  MatDialogModule,
  MatDialog,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, UserResponse } from '../../models/users.model';
import { UserAuthService } from '../../services/user-auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-popup',
  imports: [
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss',
})
export class LoginPopupComponent implements OnDestroy {
  toggle = signal(true);
  dialog = inject(MatDialogRef);

  destory$ = new Subject<void>();
  private userAuthService = inject(UserAuthService);
  passwordCheck = signal({
    password: '',
    retypePassword: '',
  });
  userData = signal<User>({
    userName: '',
    email: '',
    password: '',
  });

  openLogin() {
    this.toggle() ? this.toggle.set(false) : this.toggle.set(true);
    this.userData.set({
      userName: '',
      email: '',
      password: '',
    });
  }

  handleLoginAction() {
    console.log(this.userData());

    this.userAuthService
      .loginUser(this.userData())
      .pipe(takeUntil(this.destory$))
      .subscribe((res: UserResponse) => {
        console.log(res.msg);
        if (res.data) {
          this.onCancel();
        }
      });
  }

  handleSignUpAction() {
    if (this.passwordCheck().password === this.passwordCheck().retypePassword) {
      this.userData().password = this.passwordCheck().password;
      console.log(this.userData());
      this.userAuthService
        .createUser(this.userData())
        .pipe(takeUntil(this.destory$))
        .subscribe((res: UserResponse) => {
          console.log(res.data);
          if (res.data) {
            this.toggle.set(false);
          }
        });
    } else {
      console.log('Please check the Passwords');
    }
  }

  onCancel() {
    this.dialog.close();
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
