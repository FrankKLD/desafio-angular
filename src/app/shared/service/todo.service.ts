import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getTodos(): Observable<todo[]> {
    return this.httpClient.get<todo[]>(this.apiUrl);
  }
}
