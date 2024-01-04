import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "../interfaces/Lesson";
import {LessonRequest} from "../interfaces/LessonRequest";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  readonly path = 'http://localhost:8080/api/lesson'
  constructor(private _http: HttpClient) { }

  getLessonsByCourse(courseId: number): Observable<Lesson[]> {
    return this._http.get<Lesson[]>(`${this.path}/${courseId}`)
  }

  addLesson(request: LessonRequest): Observable<void>{
    return this._http.post<void>(`${this.path}`, request)
  }
}
