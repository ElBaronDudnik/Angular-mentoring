import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userName: string, password: string): void {
    if (userName && password) {
      const token = 'fl;erfk;wegfkw';
      const userObj = JSON.stringify({userName, password, token});
      localStorage.setItem('user', userObj);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUserInfo(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).userName : null;
  }
}
