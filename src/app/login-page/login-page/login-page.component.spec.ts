import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthServiceStub } from './auth.service.mock';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [ { provide: AuthService, useClass: AuthServiceStub}, { provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log user in', () => {
    const spy = spyOn(localStorage, 'setItem');
    const email = 'email';
    const password = 'password';
    const token = '1234567890';
    const resultString = `user', '{"email":"${email}","password":"${password}","token":"${token}"}`;

    component.email = email;
    component.password = password;
    component.onLogin();

    expect(spy).toHaveBeenCalledWith(resultString);
  });

  it('should redirect to courses page', () => {
    component.onLogin();
    expect (mockRouter.navigate).toHaveBeenCalledWith (['/courses']);
  });
});
