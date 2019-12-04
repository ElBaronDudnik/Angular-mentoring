export class AuthServiceStub {
  login() {
    const userObj = JSON.stringify({
      userName: 'Olena',
      password: 'password',
      token: '1234567890'
    });
    localStorage.setItem('user', userObj);
  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return true;
  }

  getUserInfo() {
    return {
      userName: 'Olena',
      password: 'password',
      token: '1234567890'
    };
  }
}
