import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getUserById(userId: number | undefined): Observable<user> {
    return this.httpClient.get<user>(this.apiUrl + '/' + userId);
  }
}
