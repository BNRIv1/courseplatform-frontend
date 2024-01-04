import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResourceType} from "../interfaces/ResourceType";

@Injectable({
  providedIn: 'root'
})
export class ResourceTypeService {

  readonly path = 'http://localhost:8080/api/resource-type'

  constructor(private _http: HttpClient) { }

  getResourceTypes(): Observable<ResourceType[]> {
    return this._http.get<ResourceType[]>(`${this.path}`)
  }
}
