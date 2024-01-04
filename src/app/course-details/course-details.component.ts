import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {LessonService} from "../services/lesson.service";
import {Lesson} from "../interfaces/Lesson";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ResourcesComponent} from "../resources/resources.component";

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [
    CdkAccordionModule,
    NgForOf,
    ResourcesComponent,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {

  lessons$: Observable<Lesson[]>;
  courseId: number;

  constructor(private route: ActivatedRoute, private _service: LessonService) {
  }

  ngOnInit(): void {

    this.courseId = +this.route.snapshot.paramMap.get("id")

    this.lessons$ = this._service.getLessonsByCourse(this.courseId);
  }

}
