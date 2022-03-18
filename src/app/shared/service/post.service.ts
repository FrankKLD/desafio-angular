import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<post[]> {
    return this.httpClient.get<post[]>(this.apiUrl);
  }
}
