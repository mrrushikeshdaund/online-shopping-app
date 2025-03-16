import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from './environments';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    const url = `${environments.USERS_BASE_URL}${environments.USERS.GET_ALL_USERS}`;
    return this.httpClient.get(url);
  }

  registerUser(newUser: any) {
    const url = `${environments.USERS_BASE_URL}${environments.USERS.REGISTER_USER}`;
    return this.httpClient.post(url, newUser);
  }

  loginUser(user: any) {
    const url = `${environments.USERS_BASE_URL}${environments.USERS.LOGIN_USER}`;
    return this.httpClient.post(url, user);
  }
}
