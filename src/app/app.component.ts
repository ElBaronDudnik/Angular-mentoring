import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { autoLogin } from './store/auth/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userInfo: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.userInfo = this.store.select('auth').pipe(map(userInfo => `${userInfo.user.name.last} ${userInfo.user.name.first}`));
    this.store.dispatch(autoLogin());
  }
}
