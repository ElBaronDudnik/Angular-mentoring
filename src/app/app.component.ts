import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public isUserLogin !: boolean;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.isUserLogin = !this.authService.isAuthenticated();
    console.log(this.isUserLogin);
  }
}
