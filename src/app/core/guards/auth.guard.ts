import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { selectToken } from '../../store/auth/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>,
              private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(selectToken)
      .pipe(map((token: string) => token ? true : this.router.parseUrl('/login')));
  }
}
