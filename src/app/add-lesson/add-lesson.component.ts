import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LessonService} from "../services/lesson.service";
import {ActivatedRoute} from "@angular/router";
import {LessonRequest} from "../interfaces/LessonRequest";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-add-lesson',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.css'
})
export class AddLessonComponent {
  lessonForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    courseId: new FormControl('', [Validators.required])
  });

  constructor(private lessonService: LessonService, private route: ActivatedRoute) {
  }

  submit(){
    const courseId = +this.route.snapshot.paramMap.get("id")

    const lesson: LessonRequest = {
      title: this.lessonForm.get("title").value,
      description: this.lessonForm.get("description").value,
      courseId: courseId
    }

    this.lessonService.addLesson(lesson).subscribe()
  }
}
