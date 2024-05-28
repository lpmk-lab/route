import { Injectable } from '@angular/core';
import { User } from '../Modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
    USERS: User[] = [
    new User(  1,  'Alice','AL',  'alice123' ),
    new User(2,  'Bob','BB', 'bob123' ),
    new User(3, 'Charlie','CH',  'charlie123'),
    new User( 4,  'David','DV',  'david123' ),
    new User(  5,  'Eve','EV','eve123' )
];
}
