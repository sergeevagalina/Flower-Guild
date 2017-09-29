import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class UserService {

  constructor(private restangular: Restangular) { }

  submitUser(user: User): Observable<User> {
    return this.restangular.all('users').post(user);
  }

  getUser(userId: number): Observable<User> {
    return this.restangular.one('users', userId).get();
  }

}
