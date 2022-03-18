import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { album } from '../model/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getAlbums(): Observable<album[]> {
    return this.httpClient.get<album[]>(this.apiUrl);
  }
}
