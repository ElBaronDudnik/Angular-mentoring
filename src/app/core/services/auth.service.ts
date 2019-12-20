import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApiService } from './api.service';

interface IToken {
  token: string;

}

interface ILogin {
  login: string;
  password: string;
}

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  private authUrl = 'auth';
  private isAuth !: boolean;
  private token!: string | undefined;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-token',
    })
  };

  constructor(private api: ApiService) {
    this.isAuth = !!localStorage.getItem('token');
  }

  getUserInfo(): Observable<ILogin> {
    return this.api.post(`${this.authUrl}/userinfo`, {token: this.token}, this.httpOptions);
  }

  login(login: string, password: string) {
    this.api.post(`${this.authUrl}/login`, {login, password}, this.httpOptions)
      .subscribe(response => {
        this.token = response.token;
        localStorage.setItem('token', this.token || '');
        this.isAuth = true;
      });
  }

  getToken() {
    return this.token;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuth = false;
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
