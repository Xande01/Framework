import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodosLength(params:any): Observable<any>{
    if (params == 'todas') {return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos`)} 
    else {return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos?completed=${params}`)}
  }
  getTodos(params:any,page:any,limit:any): Observable<any>{
    if (params == 'todas') {return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)} 
    else {return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos?completed=${params}&_page=${page}&_limit=${limit}`)}
  }
}
