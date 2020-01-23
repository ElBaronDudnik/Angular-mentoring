import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { autoLogin } from './store/auth/auth.actions';
import { Observable } from 'rxjs';
import { selectFullName } from './store/auth/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userFullName: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.userFullName = this.store.select(selectFullName);
    this.store.dispatch(autoLogin());
  }
}
