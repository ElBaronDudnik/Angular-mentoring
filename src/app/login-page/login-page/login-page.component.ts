import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  email !: string;
  password !: string;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {}

  onLogin() {
    this.authService.login(this.email, this.password);
    this.router.navigate(['/courses']);
  }
}
