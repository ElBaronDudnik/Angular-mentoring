import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  email !: string;
  password !: string;
  constructor(private store: Store<AppState>) { }

  onLogin() {
    if (this.email && this.password) {
      this.store.dispatch(login({ email: this.email, password: this.password }));
    }
  }
}
