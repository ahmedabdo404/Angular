import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient ) { }

  getAllUser(): Observable<any[]>{
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
    this.http.post("https://jsonplaceholder.typicode.com/users",{id:1, name: "ahmed", username: "ahmed404"})
  }
}

