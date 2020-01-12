import { Injectable, OnDestroy } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import * as fromApp from '../../shared/store/app.reducer';
import * as authActions from '../../login-page/login/store/auth.actions';
import {Store} from "@ngrx/store";
import { LoginSuccess } from 'app/login-page/login/store/auth.actions';

export interface ILogin {
  id: number;
  fakeToken: string;
  login: string;
  password: string;
  name: IName;
}

export interface IName {
  first: string;
  last: string;
}

@Injectable({
  providedIn: CoreModule
})
export class AuthService implements OnDestroy {
  private authUrl = 'auth';
  private isAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private token!: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-token',
    })
  };

  constructor(private api: ApiService,
              private router: Router,
              private store: Store<fromApp.AppState>) {
    this.token = JSON.stringify(localStorage.getItem('token'));
    // this.store.dispatch(new authActions.LoginSuccess(this.token));
    this.isAuth$.next(!!this.token);
  }

  ngOnDestroy(): void {
    this.isAuth$.complete();
  }

  getUserInfo(): Observable<ILogin> {
    return this.api.post(`${this.authUrl}/userinfo`, {token: this.token}, this.httpOptions);
  }

  login(login: string, password: string) {
    this.api.post(`${this.authUrl}/login`, {login, password}, this.httpOptions)
      .subscribe(response => {
        this.token = response.token;
        //this.store.dispatch(new authActions.LoginSuccess(this.token));
        localStorage.setItem('token', this.token || '');
        this.isAuth$.next(true);
        this.router.navigate(['/courses']);
      });
  }

  getToken() {
    return this.token;
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('token');
    this.isAuth$.next(false);
    this.store.dispatch(new authActions.Logout());
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuth$.asObservable();
  }
}
