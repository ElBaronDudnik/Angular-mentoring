import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  email !: string;
  password !: string;
  constructor(private authService: AuthService) { }

  onLogin() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password);
    }
  }
}
