import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Resource} from "../interfaces/Resource";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  readonly path = 'http://localhost:8080/api/resource'

  constructor(private _http: HttpClient) { }

  getResourcesForLesson(lessonId: number): Observable<Resource[]> {
    return this._http.get<Resource[]>(`${this.path}/${lessonId}`)
  }

  addResource(data: any): Observable<void>{
    return this._http.post<void>(`${this.path}`, data)
  }
}
