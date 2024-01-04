import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resource} from "../interfaces/Resource";
import {Teacher} from "../interfaces/Teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  readonly path = 'http://localhost:8080/api/teacher'

  constructor(private _http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this._http.get<Teacher[]>(`${this.path}`)
  }

  addTeacher(data: any): Observable<void>{
    return this._http.post<void>(`${this.path}`, data)
  }
}
