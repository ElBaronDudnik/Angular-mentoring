import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { autoLogin } from './store/auth/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from './store/auth/auth.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userFullName: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.userFullName = this.store.select('auth')
      .pipe(
        map((userInfo: AuthState) =>
          `${userInfo.userLogin.name.last} ${userInfo.userLogin.name.first}`)
      );
    this.store.dispatch(autoLogin());
  }
}
