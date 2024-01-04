import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly path = 'http://localhost:8080/api/student'

  constructor(private _http: HttpClient) { }

  addStudent(data: any): Observable<void>{
    return this._http.post<void>(`${this.path}`, data)
  }
}
