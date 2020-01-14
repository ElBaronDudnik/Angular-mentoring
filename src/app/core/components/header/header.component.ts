import { Component, Input } from '@angular/core';
import { logout } from '../../../store/auth/auth.actions';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() userInfo!: Observable<string>;
  constructor(private store: Store<AppState>) { }

  logOff() {
    this.store.dispatch(logout());
  }
}
