import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'app/shared/store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<AppState>) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select('auth')
      .pipe(map(authState => authState.isAuth ? true : this.router.parseUrl('/login') ));
  }
}
