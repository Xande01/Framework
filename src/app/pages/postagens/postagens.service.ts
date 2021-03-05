import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(private http: HttpClient) { }

  getPostagens(page: any, limite: any): Observable<any> {    
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limite}`) 
  }

  getPostagensLength(): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts`)
  }

}
