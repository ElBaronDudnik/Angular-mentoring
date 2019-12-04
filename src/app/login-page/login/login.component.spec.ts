import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthServiceStub } from './auth.service.mock';

describe('LoginPageComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [ { provide: AuthService, useClass: AuthServiceStub}, { provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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
