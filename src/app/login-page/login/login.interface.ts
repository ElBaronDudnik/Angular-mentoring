export interface ILogin {
  login: string;
  password: string;
  name: IName;
}

interface IName {
  first: string;
  last: string;
}
