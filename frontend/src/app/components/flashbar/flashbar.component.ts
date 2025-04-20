import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'app-flashbar',
  imports: [LoginPopupComponent],
  templateUrl: './flashbar.component.html',
  styleUrl: './flashbar.component.scss',
})
export class FlashbarComponent {
  private dialog = inject(MatDialog);
  openLoginPopup() {
    this.dialog.open(LoginPopupComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
