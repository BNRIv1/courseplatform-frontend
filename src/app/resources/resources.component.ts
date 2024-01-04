import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Resource} from "../interfaces/Resource";
import {ResourceService} from "../services/resource.service";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'lesson-resources',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit{
  @Input() lessonId: number;

  resources$: Observable<Resource[]>

  constructor(private _service: ResourceService) {
  }
  ngOnInit(): void {
    this.resources$ = this._service.getResourcesForLesson(this.lessonId)
  }
}
