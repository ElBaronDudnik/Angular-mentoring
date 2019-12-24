import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated()
      .pipe(tap(res => console.log(res)),
        map(res => res ? true : this.router.parseUrl('/login') ));
  }
}
