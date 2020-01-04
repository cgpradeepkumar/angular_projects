import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Item } from './item';

const endpoint = 'http://localhost:8080/library/';
var success = '';
var failed = '';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LibraryApiService {

  constructor(private http: HttpClient) {

  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(endpoint + 'items');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('this is error handler ' + error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }

  public createItem(item: Item): Observable<string> {
    console.log(item);
    return this.http.post<string>(endpoint + 'item', item);
  }
}
