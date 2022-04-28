import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  filteredUser: any;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
  }
}
