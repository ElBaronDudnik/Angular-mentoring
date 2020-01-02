import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';

interface IToken {
  token: string;
}

export interface ILogin {
  login: string;
  password: string;
  name: IName;
}

interface IName {
  first: string;
  last: string;
}

@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  private authUrl = 'auth';
  private isAuth: Subject<boolean> = new Subject();
  private token!: string | null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-token',
    })
  };

  constructor(private api: ApiService) {
    this.token = localStorage.getItem('token');
    this.isAuth.next(!!this.token);
  }

  getUserInfo(): Observable<ILogin> {
    return this.api.post(`${this.authUrl}/userinfo`, {token: this.token}, this.httpOptions);
  }

  login(login: string, password: string) {
    this.api.post(`${this.authUrl}/login`, {login, password}, this.httpOptions)
      .subscribe(response => {
        this.token = response.token;
        localStorage.setItem('token', this.token || '');
        this.isAuth.next(true);
      });
  }

  getToken() {
    return this.token;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuth.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuth.asObservable();
  }
}
