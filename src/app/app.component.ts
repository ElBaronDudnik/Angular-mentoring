import {Component, ChangeDetectionStrategy, OnInit, OnChanges, AfterViewInit, DoCheck} from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck, OnInit {
  public isUserLogin !: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth();
  }

  ngDoCheck() {
    this.isAuth();
  }

  isAuth() {
    this.isUserLogin = !this.authService.isAuthenticated();
  }
}
