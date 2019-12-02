import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth !: boolean;
  constructor() {
    this.isAuth = !!localStorage.getItem('user');
  }

  login(email: string, password: string): void {
    if (email && password) {
      const token = '1234567890';
      const userObj = JSON.stringify({email, password, token});
      localStorage.setItem('user', userObj);
      this.isAuth = true;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isAuth = false;
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  getUserInfo(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).userName : null;
  }
}
