import {getTestBed, TestBed} from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let injector: TestBed;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });

    injector = getTestBed();
    service = injector.get(AuthService);
  });

  it('should user login with credentials', () => {
    const spy = spyOn(localStorage, 'setItem');
    const userName = 'userName';
    const password = 'password';
    const token = '1234567890';
    const resultString = `user', '{"userName":"${userName}","password":"${password}","token":"${token}"}`;

    service.login(userName, password);
    expect(spy).toHaveBeenCalledWith( resultString );
  });

  it('should user not login without credentials', () => {
    const spy = spyOn(localStorage, 'setItem');

    service.login('', '');
    expect(spy).not.toHaveBeenCalled();
  });

  it('should user logout', () => {
    const spy = spyOn(localStorage, 'removeItem');

    service.logout();
    expect(spy).toHaveBeenCalled();
  });

});
