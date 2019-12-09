import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  email !: string;
  password !: string;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {}

  onLogin() {
    console.log('logged in successfully');
    this.authService.login(this.email, this.password);
    this.router.navigate(['/courses']);
  }
}
