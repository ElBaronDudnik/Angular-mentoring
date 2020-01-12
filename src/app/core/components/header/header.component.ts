import { Component, AfterViewInit, OnInit } from '@angular/core';
import { AuthService, ILogin } from '../../services/auth.service';
import { switchMap, map } from 'rxjs/operators';
import { iif, of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/shared/store/app.reducer';
import { Logout } from 'app/login-page/login/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userInfo!: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('auth').subscribe((authState) => {
      if (authState.user.name) {
        this.userInfo = `${authState.user.name.last} ${authState.user.name.first}`
      }
    })
  }

  logOff() {
    this.store.dispatch(new Logout());
  }
}
