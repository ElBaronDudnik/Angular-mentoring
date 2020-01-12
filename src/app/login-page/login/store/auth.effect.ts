import { Actions, ofType, Effect } from '@ngrx/effects';
import { LOGIN, Login, LoginSuccess, LOGIN_SUCCESS, LOGOUT, GetUserInfo, LoginFail, AUTO_LOGIN } from './auth.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { ApiService } from 'app/core/services/api.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    private authUrl = 'auth';
    @Effect()
    authLogin = this.actions$.pipe(
        ofType(LOGIN),
        switchMap((authData: Login) => this.api.post(`${this.authUrl}/login`, 
                {login: authData.payload.email, password: authData.payload.password})
                .pipe(
                    map(resData => new LoginSuccess(resData.token)),
                    catchError((error) => of(new LoginFail(error)))
                )
        )
    );

    // @Effect({ dispatch: false })
    // autoLogin = this.actions$.pipe(
    //     ofType(AUTO_LOGIN),
    //     tap(() => console.log(localStorage.getItem('token')))
    // )

    @Effect()
    authSuccess = this.actions$.pipe(
        ofType(LOGIN_SUCCESS),
        // tap(() => this.router.navigate(['/courses'])),
        switchMap((authState: LoginSuccess) => {
            return this.api.post(`${this.authUrl}/userinfo`, 
            {token: authState.payload})
            .pipe(
                map(resData => new GetUserInfo({user: resData})),
            )
        }
    ))

    @Effect({ dispatch: false })
    authLogout = this.actions$.pipe(
        ofType(LOGOUT),
        tap(() => this.router.navigate(['/login'])
    ))
    
    constructor(private actions$: Actions,
        private api: ApiService,
        private router: Router) {}
}