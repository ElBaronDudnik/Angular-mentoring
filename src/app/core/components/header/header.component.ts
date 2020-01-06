import { Component, AfterViewInit } from '@angular/core';
import { AuthService, ILogin } from '../../services/auth.service';
import { switchMap, map } from 'rxjs/operators';
import { iif, of, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  public userInfo!: Observable<string>;
  constructor(private authService: AuthService) { }

  ngAfterViewInit() {
    this.userInfo = this.authService.isAuthenticated().pipe(
      switchMap(status => iif(() => status,
        this.authService.getUserInfo().pipe(
          map((userInfo: ILogin) => `${userInfo.name.last} ${userInfo.name.first}`)),
        of('')))
    );
  }

  logOff() {
    this.authService.logout();
  }
}
