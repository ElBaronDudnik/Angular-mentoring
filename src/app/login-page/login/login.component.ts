import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth/auth.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  email !: FormControl;
  password !: FormControl;

  public loginForm!: FormGroup;
  constructor(private store: Store<AppState>) {
    this.email = new FormControl('', Validators.required)
    this.password = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onLogin() {
    if (this.email.valid && this.password.valid) {
      this.store.dispatch(login({ email: this.email.value, password: this.password.value }));
    }
  }
}
