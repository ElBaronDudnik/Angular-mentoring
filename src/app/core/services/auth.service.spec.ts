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

  it('should user login with credentials', () => {
    const spy = spyOn(localStorage, 'setItem');

    service.login('foo', 'bar');
    expect(spy).toHaveBeenCalledWith( 'user', '{"userName":"foo","password":"bar","token":"1234567890"}' );
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

  // it('should check whether user authenticated', () => {
  //   const spy = spyOn(localStorage, 'getItem');
  //
  //   service.isAuthenticated();
  //   expect(spy).toHaveBeenCalledWith('user');
  // });
  //
  // it('should get user info', () => {
  //   const spy = spyOn(localStorage, 'getItem');
  //
  //   service.getUserInfo();
  //   expect(spy).toHaveBeenCalledWith('user');
  // });
});
