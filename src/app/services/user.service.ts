import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class UserService {

  constructor(private restangular: Restangular) { }

  private subject = new Subject<User>();

  sendCurrentUser(user: User) {
    this.subject.next(user);
  }

  getCurrentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  submitUser(user: User): Observable<User> {
    return this.restangular.all('users').post(user);
  }

  getUser(email: string, password: string): Observable<User[]> {
    return this.restangular.one('users').get({email: email} && {password: password});
  }

  getUserById(userId: number): Observable<User> {
    return this.restangular.one('users', userId).get();
  }

}

