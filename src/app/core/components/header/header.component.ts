import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logIn() {
    console.log('login');
  }

  logOff() {
    this.authService.logout();
    console.log('log off');
  }
}
