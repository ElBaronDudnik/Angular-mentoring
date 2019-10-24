import { UserInterface } from './user.interface';

class User implements UserInterface {
  public id: number;
  public firstName: string;
  public lastName: string;

  constructor(props: UserInterface) {
    this.id = props.id;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
  }
}
