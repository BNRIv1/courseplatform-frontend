import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../interfaces/Course";
import {CourseRequest} from "../interfaces/CourseRequest";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  readonly path = 'http://localhost:8080/api/course'

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.path}`)
  }

  addCourse(course: CourseRequest): Observable<void>{
    return this.http.post<void>(`${this.path}`, course)
  }

  //getCourseLessons(courseId: number):


}
