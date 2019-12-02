import { getTestBed, TestBed } from '@angular/core/testing';

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

  it('should login users if they provide credentials', () => {
    const setItemStub = spyOn(localStorage, 'setItem');
    const email = 'email';
    const password = 'password';
    const token = '1234567890';
    const resultString = `{"email":"${email}","password":"${password}","token":"${token}"}`;

    service.login(email, password);
    expect(setItemStub).toHaveBeenCalledWith('user', resultString);
  });

  it('should user not login without credentials', () => {
    const setItemStub = spyOn(localStorage, 'setItem');

    service.login('', '');
    expect(setItemStub).not.toHaveBeenCalled();
  });

  it('should user logout', () => {
    const removeItemStub = spyOn(localStorage, 'removeItem');

    service.logout();
    expect(removeItemStub).toHaveBeenCalled();
  });
});
