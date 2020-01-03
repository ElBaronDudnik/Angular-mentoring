import { Component, OnInit } from '@angular/core';
import { AuthService, ILogin } from '../../services/auth.service';
import { Router } from '@angular/router';
import {iif, Observable, of} from 'rxjs';
import {map, filter, switchMap, tap, mergeMap} from 'rxjs/operators';
import {BreadcrumbsService} from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userInfo!: Observable<string>;
  constructor(private authService: AuthService,
              private router: Router,
              private crumbService: BreadcrumbsService) { }

  ngOnInit() {
    this.userInfo = this.authService.isAuthenticated().pipe(
      mergeMap(status => iif(() => status,
        this.authService.getUserInfo().pipe(
          map((userInfo: ILogin) => `${userInfo.name.last} ${userInfo.name.first}`)),
        of('')))
    );
  }

  logOff() {
    this.authService.logout();
    this.crumbService.clearCrumb();
    this.router.navigate(['/login']);
  }
}
