import { Component, OnInit } from '@angular/core';
import { AuthService, ILogin } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userInfo!: Observable<string>;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.userInfo = this.authService.isAuthenticated().pipe(
      filter(status => status),
      switchMap(() => this.authService.getUserInfo()),
      map((userInfo: ILogin) => `${userInfo.name.last} ${userInfo.name.first}`)
    );
  }

  logOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
