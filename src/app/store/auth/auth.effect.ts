import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { ApiService } from 'app/core/services/api.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getUserInfo, loginFail, loginSuccess, logout, UserLogin, UserToken } from './auth.actions';

@Injectable()
export class AuthEffects {
    private authUrl = 'auth';

    authLogin$ = createEffect(() => this.actions$.pipe(
        ofType('[Login Page] Login'),
        switchMap((action: UserLogin) => this.api.post(`${this.authUrl}/login`,
                {login: action.email, password: action.password})
                .pipe(
                    map(resData => loginSuccess(resData)),
                    catchError((error) => of(loginFail(error)))
                )
        )
    ));

    autoLogin$ = createEffect(() => this.actions$.pipe(
        ofType('[Login Page] Auto Login'),
        map(() => {
          const token = localStorage.getItem('token') || '';
          return token ? loginSuccess({token}) : logout();
        })
    ));

    authSuccess$ = createEffect(() => this.actions$.pipe(
        ofType('[Login Page] Login Success'),
        tap(() => this.router.navigate(['/courses'])),
        tap((action: UserToken) => localStorage.setItem('token', action.token)),
        switchMap((action: any) => {
            return this.api.post(`${this.authUrl}/userinfo`,
            {token: action.token})
            .pipe(
                map(resData => getUserInfo({user: resData})),
            );
        }
    ))
    );

    authLogout$ = createEffect(() => this.actions$.pipe(
        ofType('[Login Page] Logout'),
        tap(() => localStorage.removeItem('token')),
        tap(() => this.router.navigate(['/login'])
    )), { dispatch: false });

    constructor(private actions$: Actions,
                private api: ApiService,
                private router: Router) {}
}
