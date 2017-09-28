import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class UserService {

  constructor(private restangular: Restangular) { }

  submitUser(user: User): Observable<User> {
    console.log(user);
    return this.restangular.all('users').post(user);
  }

}
