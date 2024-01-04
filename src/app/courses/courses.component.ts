import {Component, OnInit} from '@angular/core';
import {CourseService} from "../services/course.service";
import {Observable} from "rxjs";
import {Course} from "../interfaces/Course";
import {AsyncPipe, DecimalPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    RouterLink,
    DecimalPipe
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>

  constructor(private _service: CourseService) {
  }

  ngOnInit(): void {
    this.courses$ = this._service.getCourses();
  }

}
