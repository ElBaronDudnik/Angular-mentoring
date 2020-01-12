import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './shared/store/app.reducer';
import { AutoLogin } from './login-page/login/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
  }
}
