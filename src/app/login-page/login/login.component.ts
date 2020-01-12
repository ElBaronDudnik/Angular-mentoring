import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AppState } from 'app/shared/store/app.reducer';
import { Store } from '@ngrx/store';
import * as authActions from './store/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  email !: string;
  password !: string;
  public isAuth!: boolean;
  private token!: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('auth').subscribe(authState => {
      this.isAuth = authState.isAuth;
      this.token = authState.token;
      this.isAuth 
        ? localStorage.setItem('token', this.token)
        : localStorage.removeItem('token');
    })
  }

  onLogin() {
    if (this.email && this.password) {
      this.store.dispatch(new authActions.Login({email: this.email, password: this.password}));
    }
  }
}
