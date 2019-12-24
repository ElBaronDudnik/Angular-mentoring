import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userName!: string;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.authService.getUserInfo().subscribe(userInfo => this.userName = `${userInfo.name.first} ${userInfo.name.last}`);
    }
  }

  logOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
