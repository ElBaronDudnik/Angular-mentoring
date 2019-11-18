import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  email !: string;
  password !: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onLogin() {
    console.log('logged in successfully');
    this.authService.login(this.email, this.password);
  }
}
