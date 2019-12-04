import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Partial<Router>>;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthServiceSpy', [
      'login',
      'logout',
      'isAuthenticated',
      'getUserInfo'
    ]);
    mockRouter = jasmine.createSpyObj('RouterSpy', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: authService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log user in', () => {
    const email = 'email';
    const password = 'password';

    component.email = email;
    component.password = password;
    component.onLogin();

    expect(authService.login).toHaveBeenCalledWith(email, password);
  });

  it('should redirect to courses page', () => {
    component.onLogin();
    expect (mockRouter.navigate).toHaveBeenCalledWith (['/courses']);
  });
});
