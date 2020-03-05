import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, delay } from 'rxjs/operators';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com';

  getUsers() {
    return this.http.get(`${this.url}/users`).pipe(
      tap(console.log)
    );
  }

  getMenuOpts() {
  return this.http.get<Componente>('/assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get<any[]>(`${this.url}/albums`).pipe(
      tap(console.log)
    );
  }
 getHeroes() {
   return this.http.get('/assets/data/heroes.json').pipe(
     delay(2000)
   );
 }

}
