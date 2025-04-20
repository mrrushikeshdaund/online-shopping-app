import { User, UserResponse } from '../models/users.model';
import { ENVIROMENTS } from '../Enviroments';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private http = inject(HttpClient);

  createUser(user: User): Observable<UserResponse> {
    const url = `${ENVIROMENTS.BASE_URL}${ENVIROMENTS.USERS.BASE_URL}${ENVIROMENTS.USERS.ADD}`;
    return this.http.post<UserResponse>(url, user);
  }

  loginUser(user: User): Observable<UserResponse> {
    const url = `${ENVIROMENTS.BASE_URL}${ENVIROMENTS.USERS.BASE_URL}${ENVIROMENTS.USERS.LOGIN}`;
    return this.http.post<UserResponse>(url, user);
  }
}
