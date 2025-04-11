import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FlashbarComponent } from './components/flashbar/flashbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FlashbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Online Shopping App';
}
