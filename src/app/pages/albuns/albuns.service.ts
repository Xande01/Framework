import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  constructor(private http: HttpClient) { }

  getAlbuns(page: any, limite: any): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limite}`)
  }
  getAlbunsLength(): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/albums`)
  }
}
