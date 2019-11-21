import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { AuthService } from '../../core/services/auth.service';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [ AuthService, { provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    authService = fixture.debugElement.injector.get(AuthService);
    // router = fixture.debugElement.injector.get(RouterModule);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log user in', () => {
    const spy = spyOn(localStorage, 'setItem');
    component.email = 'var@epam.com';
    component.password = 'Secret1';
    component.onLogin();

    expect(spy).toHaveBeenCalledWith( 'user', '{"userName":"var@epam.com","password":"Secret1","token":"1234567890"}');
  });

  it('should redirect to courses page', () => {
    component.onLogin();
    expect (mockRouter.navigate).toHaveBeenCalledWith (['/courses']);
  });
});
